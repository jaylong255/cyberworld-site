// route53 dns record
resource "aws_route53_record" "dns" {
  depends_on = [aws_cloudfront_distribution.distribution]
  zone_id = var.hosted_zone_id
  name    = "${var.environment}.${var.domain_name}"
  type    = "A"
  ttl     = "300"
  records = ["${aws_cloudfront_distribution.distribution.domain_name}"]
}