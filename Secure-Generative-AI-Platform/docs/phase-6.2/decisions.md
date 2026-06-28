# Architecture Decisions

## Decision 1

Replace managed DynamoDB permissions with a least-privilege custom IAM policy.

**Reason**

Reduce the Lambda execution role permissions to only the required DynamoDB actions.

---

## Decision 2

Enforce HTTPS through CloudFront.

**Reason**

Prevent unencrypted communication between users and the application.

---

## Decision 3

Use API Gateway JWT Authorizer.

**Reason**

Authenticate requests before they reach AWS Lambda, reducing unnecessary compute and improving security.

---

## Decision 4

Keep secrets out of Lambda environment variables.

**Reason**

Environment variables should contain configuration values only. Sensitive secrets should be stored in AWS Secrets Manager or AWS Systems Manager Parameter Store in production.
