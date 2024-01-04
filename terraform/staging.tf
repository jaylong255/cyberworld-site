module "staging_resources" {
    source = "./modules/static-frontend"

    project = var.project
    environment = "staging"
    certificate_arn = var.certificate_arn
    aliases = ["staging.${var.domain_name}"]
    domain_name = var.domain_name
    hosted_zone_id = var.hosted_zone_id
    is_production = false
}

# module "staging_mailer" {
#     source = "./modules/mailer-app"

#     project = var.project
#     environment = "staging"
#     domain_name = var.domain_name
#     hosted_zone_id = var.hosted_zone_id
#     is_production = false
# }