# terraform {
#     required_providers {
#         aws = {
#             source  = "hashicorp/aws"
#         }

#         random = {
#             source  = "hashicorp/random"
#         }
#     }

#     cloud {
#         hostname = "app.terraform.io"
#         organization = "cyberworld-builders"

#         workspaces {
#             name = "cyberworld-site"
#         }
#     }
#     # backend "local" {
#     #     path = "terraform.tfstate"
#     # }
# }

# terraform {
#   backend "local" {}
# }

terraform {
  backend "local" {
    path = "terraform.tfstate"
  }
}

provider "aws" {
    region = "us-west-1"
}
