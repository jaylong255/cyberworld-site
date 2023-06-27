variable project {
  type        = string
  default     = "cyber"
  description = "The name of the project"
}

variable certificate_arn {
  type        = string
  description = "The ARN of the certificate"
}

variable domain_name {
  type        = string
  description = "The domain name"
  default     = "cyberworldbuilders.com"
}

variable hosted_zone_id {
  type        = string
  description = "The ID of the hosted zone"
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