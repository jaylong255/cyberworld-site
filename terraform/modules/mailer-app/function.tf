# Create a lambda function that runs a node script to send emails

resource "aws_lambda_function" "mailer" {
  filename         = "../../../apps/contact.zip"
  function_name    = "mailer"
  role             = "${aws_iam_role.lambda_exec.arn}"
  handler          = "index.handler"
  source_code_hash = "${base64sha256(file("mailer.zip"))}"
  runtime          = "nodejs8.10"
  timeout          = "60"
  memory_size      = "128"
  publish          = "true"
  environment {
    variables = {
        NODE_ENV = "staging"
    }
  }
}
