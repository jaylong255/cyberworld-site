# # Policy and document
# data "aws_iam_policy_document" "cdn" {
#   statement {
#     actions = ["s3:GetObject"]
#     resources = ["${aws_s3_bucket.bucket.arn}/*"]

#     principals {
#       type        = "AWS"
#       identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
#     }
#   }
# }

# resource "aws_s3_bucket_policy" "cdn" {
#   bucket = aws_s3_bucket.bucket.id
#   policy = data.aws_iam_policy_document.cdn.json
# }
