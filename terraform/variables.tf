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