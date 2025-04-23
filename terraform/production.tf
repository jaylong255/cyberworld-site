module "production_resources" {
    source = "git::https://github.com/jaylong255/cyberworld-site.git//terraform/modules/static-frontend?ref=v0.0.1"

    project = var.project
    environment = "production"
    certificate_arn = var.certificate_arn
    aliases = [var.domain_name]
    domain_name = var.domain_name
    hosted_zone_id = var.hosted_zone_id
    is_production = true
}