locals {
  // Generate a unique string for the bucket name.
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

# ACL for the bucket.
resource "aws_s3_bucket_acl" "bucket" {
  bucket = "${aws_s3_bucket.bucket.bucket}"
  acl    = "public-read"
}
