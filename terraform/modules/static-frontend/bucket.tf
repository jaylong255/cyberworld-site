locals {
  // Generate a unique string for the bucket name.
  // It's possible that this is unnecessary because of the `bucket_prefix` attribute, 
  // but I'm keeping it in case I need to be able to predict the bucket name somewhere else.
  unique_string = substr(replace(sha1("${var.project}-${var.environment}-assets"), "/[^a-z0-9]/", ""), 0, 8) // substring of the hash of the primary segment of the bucket name
}

# Bucket for static site builds.
resource "aws_s3_bucket" "bucket" {
  bucket = "${var.project}-${var.environment}-assets-${local.unique_string}"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  tags = {
    Project     = var.project
    Environment = var.environment
    Terraform   = "true"
  }
}
