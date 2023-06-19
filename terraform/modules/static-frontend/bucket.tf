

locals {
  unique_string = "${timestamp()}"
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

# ACL for the bucket.
resource "aws_s3_bucket_acl" "bucket" {
  bucket = "${aws_s3_bucket.bucket.bucket}"
  acl    = "public-read"
}
