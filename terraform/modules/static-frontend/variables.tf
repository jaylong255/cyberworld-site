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