terraform {
  cloud {
    organization = "cyberworld-builders"

    workspaces {
      name = "cyberworld-gcp"
    }
  }
}

provider "google" {
  credentials = var.GCP_CREDENTIALS
}

locals {
  unique_string = substr(replace(sha1("some-test-bucket-"), "/[^a-z0-9]/", ""), 0, 8) // substring of the hash of the primary segment of the bucket name
}

resource "google_storage_bucket" "test_bucket" {
  name = "some-test-bucket-${local.unique_string}"
  location = "US"

  versioning {
    enabled = true
  }
}