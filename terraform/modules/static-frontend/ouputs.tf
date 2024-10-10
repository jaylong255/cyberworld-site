output "bucket_policy_json" {
  value = aws_s3_bucket_policy.bucket_policy.policy
}
