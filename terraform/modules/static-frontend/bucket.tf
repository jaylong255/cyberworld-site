locals {
  // Generate a unique string for the bucket name.
  // It's possible that this is unnecessary because of the `bucket_prefix` attribute, 
  // but I'm keeping it in case I need to be able to predict the bucket name somewhere else.
  unique_string = substr(replace(sha1("${var.project}-${var.environment}-assets"), "/[^a-z0-9]/", ""), 0, 8) // substring of the hash of the primary segment of the bucket name
}

# Bucket for static site builds.
resource "aws_s3_bucket" "bucket" {
  bucket = "${var.project}-${var.environment}-assets-${local.unique_string}"

  tags = {
    Project     = var.project
    Environment = var.environment
    Terraform   = "true"
  }
}

# Add bucket policy
resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontAccess"
        Effect    = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.distribution.arn
          }
        }
      }
    ]
  })
}

resource "aws_s3_bucket_website_configuration" "bucket_website" {
  bucket = aws_s3_bucket.bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}