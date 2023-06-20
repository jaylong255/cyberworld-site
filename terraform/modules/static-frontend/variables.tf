variable "certificate_arn" {
  description = "The ARN of the certificate to use for HTTPS"
  type        = string
}

variable "project" {
  description = "The name of the project"
  type        = string
}

variable "environment" {
  description = "The name of the environment"
  type        = string
}

variable "aliases" {
    type = list(string)
}

variable "domain_name" {
    type = string
}

variable "hosted_zone_id" {
    type = string
}

// The following are handled by Terraform Cloud, but the warning is irritating so I 
// gave them empty strings as defaults.

variable "AWS_ACCESS_KEY_ID" {
  description = "AWS access key ID"
  type        = string
  default    = ""
}


variable "AWS_SECRET_ACCESS_KEY" {
  description = "AWS secret access key"
  type        = string
  default    = ""
}

