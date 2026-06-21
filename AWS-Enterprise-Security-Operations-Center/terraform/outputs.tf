output "sns_topic_arn" {
  value = aws_sns_topic.guardduty_alerts.arn
}

output "quarantine_sg" {
  value = aws_security_group.quarantine.id
}

output "lambda_role" {
  value = aws_iam_role.lambda_role.name
}