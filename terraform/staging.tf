module "staging_resources" {
    source = "./modules/static-frontend"

    project = var.project
    environment = "staging"
    certificate_arn = var.certificate_arn
    aliases = ["staging.cyberworldbuilders.com"]
}