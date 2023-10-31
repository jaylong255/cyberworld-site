# Terraform Cloud GCP CI/CD

## Action Log
> Here's a raw list of everything I've furiously done and undone and redone to get this to work, hopefully comprehensive and in chronological order but you never now about these things especially if I get frustrated and impatient which is very possible.
- moved the existing terraform aws resources to an `aws` subfolder.
- created a readme, a .gitignore and a main.tf (The GCP TF CI/CD Starter Pack)
- created an api-driven workspace in Terraform Cloud. I'm calling it `cyberworld-gcp`
- copied main.tf code from tf cloud and ran init and apply commands
- https://support.hashicorp.com/hc/en-us/articles/4406586874387-How-to-set-up-Google-Cloud-GCP-credentials-in-Terraform-Cloud
- create a service account for the terraform cloud agent (`terraform@cyberworld-build-1533104092578.iam.gserviceaccount.com`)
- create a new json key
- 

