module "staging_resources" {
    source = "./modules/static-frontend"

    project = var.project
    environment = "staging"
    certificate_arn = var.certificate_arn
    aliases = ["staging.${var.domain_name}"]
    domain_name = "staging.${var.domain_name}"
    hosted_zone_id = var.hosted_zone_id
}