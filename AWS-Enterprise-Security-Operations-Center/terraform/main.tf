#################################
# SNS Topic
#################################

resource "aws_sns_topic" "guardduty_alerts" {
  name = "guardduty-critical-alerts"
}

resource "aws_sns_topic_subscription" "email" {
  topic_arn = aws_sns_topic.guardduty_alerts.arn
  protocol  = "email"
  endpoint  = var.notification_email
}

#################################
# Quarantine Security Group
#################################

resource "aws_security_group" "quarantine" {
  name        = "quarantine-sg"
  description = "Security quarantine group"

  revoke_rules_on_delete = true
}

#################################
# IAM Role
#################################

resource "aws_iam_role" "lambda_role" {
  name = "Lambda-EC2-Quarantine-Role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

#################################
# Lambda Basic Execution
#################################

resource "aws_iam_role_policy_attachment" "basic" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}