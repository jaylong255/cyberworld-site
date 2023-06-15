terraform {
    required_providers {
        aws = {
            source  = "hashicorp/aws"
        }

        random = {
            source  = "hashicorp/random"
        }
    }

    cloud {
        hostname = "app.terraform.io"
        organization = "cyberworld-builders"

        workspaces {
            name = "cyberworld-site"
        }
    }
}

provider "aws" {
    region = "us-west-1"
}

resource "aws_s3_bucket" "cyberworld-site" {
    bucket = "cyberworld-site"
}