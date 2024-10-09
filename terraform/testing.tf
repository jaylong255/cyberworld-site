locals {
    environment = "testing"
    suffix = substr(replace(sha1("${var.project}-${local.environment}-assets"), "/[^a-z0-9]/", ""), 0, 8) 
}

# S3 Bucket
resource "aws_s3_bucket" "testing" {
  bucket = "${var.project}-${local.environment}-assets-${local.suffix}"

  tags = {
    Environment = local.environment
    Project = var.project
    Name = "${var.project}-${local.environment}-assets-${local.suffix}"
  }
}

# resource "aws_s3_bucket_acl" "testing" {
#   bucket = aws_s3_bucket.testing.id
#   acl    = "public-read"
# }

# resource "aws_s3_bucket_ownership_controls" "testing" {
#   bucket = aws_s3_bucket.testing.id

#   rule {
#     object_ownership = "BucketOwnerEnforced"
#   }
# }

# resource "aws_s3_bucket_website_configuration" "testing" {
#   bucket = aws_s3_bucket.testing.id

#   index_document {
#     suffix = "index.html"
#   }
  
#   error_document {
#     key = "404.html"
#   }
# }

resource "aws_s3_bucket_public_access_block" "testing" {
  bucket = aws_s3_bucket.testing.id

  block_public_acls = false
  block_public_policy = false
  ignore_public_acls = false
  restrict_public_buckets = false
}

resource "aws_cloudfront_origin_access_control" "testing" {
  name = "${var.project}-${local.environment}-assets-${local.suffix}"
  description = "Origin Access Control for ${var.project}-${local.environment}-assets-${local.suffix}"
  origin_access_control_origin_type = "s3"
  signing_behavior = "always"
  signing_protocol = "sigv4"
}

resource "aws_cloudfront_distribution" "testing" {
  origin {
    domain_name = aws_s3_bucket.testing.bucket_regional_domain_name
    origin_id = "S3-${aws_s3_bucket.testing.id}"
    origin_access_control_id = aws_cloudfront_origin_access_control.testing.id
  }
  
  enabled = true
  is_ipv6_enabled = true
  default_root_object = "index.html"

  aliases = ["${local.environment}.${var.domain_name}"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.testing.id}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }    

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.testing.arn
    }
  }

  custom_error_response {
    error_caching_min_ttl = 10
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
  }

  custom_error_response {
    error_caching_min_ttl = 10
    error_code            = 404
    response_code         = 404
    response_page_path    = "/404.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = var.certificate_arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method = "sni-only"
  }

  # logging_config {
  #   include_cookies = false
  #   bucket          = "${aws_s3_bucket.testing.bucket_regional_domain_name}"
  #   prefix          = "logs/"
  # }

  tags = {
    Environment = local.environment
    Project = var.project
    Name = "${var.project}-${local.environment}-assets-${local.suffix}"
  }
}

# resource "aws_s3_bucket_policy" "testing" {
#   bucket = aws_s3_bucket.testing.id

#   policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [
#       {
#         Sid = "AllowCloudFrontServicePrincipalReadOnly"
#         Effect = "Allow"
#         Principal = {
#           Service = "cloudfront.amazonaws.com"
#         }
#         Action = "s3:GetObject"
#         Resource = "${aws_s3_bucket.testing.arn}/*"
#         Condition = {
#           StringEquals = {
#             "AWS:SourceArn" = aws_cloudfront_distribution.testing.arn
#           }
#         }
#       }
#     ]
#   })
# }

resource "aws_s3_bucket_policy" "testing" {
  bucket = aws_s3_bucket.testing.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid = "PublicReadGetObject"
        Effect = "Allow"
        Principal = "*"
        Action = "s3:*"
        Resource = [aws_s3_bucket.testing.arn, "${aws_s3_bucket.testing.arn}/*"]
      }
    ]
  })
}

resource "aws_route53_record" "testing" {
  zone_id = var.hosted_zone_id
  name = "${local.environment}.${var.domain_name}"
  type = "A"

  alias {
    name = aws_cloudfront_distribution.testing.domain_name
    zone_id = aws_cloudfront_distribution.testing.hosted_zone_id
    evaluate_target_health = false
  }
}

# resource "aws_cloudfront_function" "testing" {
#   name    = "${var.project}-${local.environment}-rewrite-uri"
#   runtime = "cloudfront-js-1.0"
#   comment = "Rewrite URI for ${var.project}-${local.environment}"
#   code    = <<-EOT
# function handler(event) {
#   var request = event.request;
#   var uri = request.uri;
  
#   // List of valid file extensions
#   var validExtensions = ['.html', '.htm', '.css', '.js', '.json', '.jpg', '.jpeg', '.png', '.gif'];
  
#   // Check if the URI has a valid file extension
#   var hasValidExtension = validExtensions.some(ext => uri.endsWith(ext));
  
#   // If the URI is the root, serve index.html
#   if (uri === '/') {
#     request.uri = '/index.html';
#   }
#   // If the URI doesn't have a valid extension, serve the 404 page
#   else if (!hasValidExtension) {
#     request.uri = '/404.html';
#   }
  
#   return request;
# }
# EOT
# }

resource "aws_cloudfront_function" "testing" {
  name    = "${var.project}-${local.environment}-rewrite-uri"
  runtime = "cloudfront-js-1.0"
  comment = "Rewrite URI for ${var.project}-${local.environment} (with debugging)"
  code    = <<-EOT
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  
  // Add a custom header for debugging
  if (!request.headers['x-debug']) {
    request.headers['x-debug'] = {value: 'Function executed'};
  }

  // Log the incoming URI
  console.log('Incoming URI:', uri);
  
  // If the URI is the root, serve index.html
  if (uri === '/') {
    console.log('Serving index.html');
    request.uri = '/index.html';
  }
  // If the URI doesn't have a file extension, append .html
  else if (!uri.includes('.')) {
    console.log('Appending .html to URI');
    request.uri = uri + '.html';
  }
  
  console.log('Final URI:', request.uri);
  
  return request;
}
EOT
}