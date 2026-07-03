# Architecture Decisions - Phase 06

## Decision 1

### Use Amazon Cognito JWT Authorizer

### Reason

JWT validation is performed directly by Amazon API Gateway rather than inside AWS Lambda.

Benefits include:

* Rejects unauthorized requests before Lambda execution
* Reduces latency
* Lowers Amazon Bedrock costs
* Simplifies backend code
* Centralizes authentication

---

## Decision 2

### Use OAuth 2.0 Authorization Code Flow

### Reason

The Authorization Code Flow is the recommended OAuth 2.0 flow for browser-based applications because it authenticates users through the Cognito Hosted UI and issues signed JWT tokens for secure API access.

---

## Decision 3

### Validate Authentication at the API Layer

### Reason

Authentication is enforced at API Gateway instead of the application layer.

Benefits:

* Defense in depth
* Reduced attack surface
* Consistent authorization
* Serverless security best practice

---

## Decision 4

### Use Claude Haiku 4.5

### Reason

During implementation, Claude Sonnet inference profiles encountered entitlement and legacy model issues within the AWS account.

Claude Haiku 4.5 was successfully validated in the Amazon Bedrock Playground and provided stable integration with AWS Lambda while maintaining the same serverless architecture.
