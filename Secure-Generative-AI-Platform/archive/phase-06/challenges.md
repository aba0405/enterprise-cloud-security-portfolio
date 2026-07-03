# Challenges and Resolutions - Phase 06

## Challenge 1

### Problem

Authenticated requests initially returned **401 Unauthorized**.

### Root Cause

The request did not include the Cognito JWT access token in the `Authorization` header.

### Resolution

Completed the OAuth 2.0 Authorization Code Flow, exchanged the authorization code for an access token, and supplied the token as a Bearer token in Postman.

### Lesson Learned

API Gateway JWT Authorizers validate signed JWT access tokens. Authorization codes and session identifiers cannot be used directly.

---

## Challenge 2

### Problem

Authenticated requests returned **500 Internal Server Error**.

### Root Cause

CloudWatch logs identified Amazon Bedrock model invocation issues rather than authentication failures.

### Resolution

Reviewed CloudWatch logs, isolated the Bedrock error, and corrected the model configuration.

### Lesson Learned

Always inspect CloudWatch logs before modifying application code. The service logs identify the true root cause more efficiently than trial-and-error debugging.

---

## Challenge 3

### Problem

Amazon Bedrock returned Marketplace entitlement and legacy model errors for Claude Sonnet.

### Root Cause

The selected inference profile was not usable for the current AWS account due to model availability and entitlement requirements.

### Resolution

Validated available models in the Amazon Bedrock Playground and migrated to the supported Claude Haiku 4.5 inference profile.

### Lesson Learned

Before integrating Amazon Bedrock models into applications, verify that the selected inference profile is active and supported for the AWS account by testing it in the Bedrock Playground.

---

## Challenge 4

### Problem

Confusion between the Cognito `/oauth2/token` endpoint and the protected application API endpoint.

### Root Cause

The OAuth token endpoint and the application API perform different functions.

### Resolution

Separated the workflow into two requests:

1. Exchange the authorization code for JWT tokens.
2. Call the protected API using the access token.

### Lesson Learned

OAuth endpoints issue tokens. API Gateway endpoints consume tokens. Keeping these responsibilities separate simplifies authentication troubleshooting.
