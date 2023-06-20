# Policy and document
data "aws_iam_policy_document" "bucket" {
  statement {
    principals {
      type        = "AWS"
    #   identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
        identifiers = ["*"]
    }

    actions = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.bucket.arn}/*"]
  }
}

resource "aws_s3_bucket_policy" "bucket" {
  bucket = "${aws_s3_bucket.bucket.bucket}"
  policy = data.aws_iam_policy_document.bucket.json
}

data "aws_iam_policy_document" "cdn" {
  statement {
    actions = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.bucket.arn}/*"]

    principals {
      type        = "AWS"
    #   identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
        identifiers = ["*"]
    }
  }
}

# resource "aws_s3_bucket_policy" "cdn" {
#   bucket = aws_s3_bucket.bucket.id
#   policy = data.aws_iam_policy_document.cdn.json
# }
