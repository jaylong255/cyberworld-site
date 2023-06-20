resource "aws_route53_record" "dns" {
  depends_on = [aws_cloudfront_distribution.distribution]
  zone_id    = var.hosted_zone_id
  name       = "${var.environment}.${var.domain_name}"
  type       = "A"
  alias {
    name                   = aws_cloudfront_distribution.distribution.domain_name
    zone_id                = aws_cloudfront_distribution.distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
