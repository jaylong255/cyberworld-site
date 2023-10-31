# Static Frontend

This module contains the resources needed to serve a static front end from and s3 bucket behind a CloudFront CDN. Some resources are expressed in other places and meant to plug into this one. Namely the SSL certificate and possibly others in the future. This module is mean to be a self-contained expresson of an individual app or environment. 

These are the resources that will be launched at the time of this writing:
1. S3 Bucket
2. Bucket ACL
3. CloudFront Origin Access Identity
4. Bucket IAM Policy for the CDN
5. CloudFront Distribution