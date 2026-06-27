# Challenges Encountered

## Challenge 1

OAuth redirect configuration

**Resolution**

Configured Cognito Hosted UI redirect URIs to match the CloudFront distribution.

---

## Challenge 2

JWT authorization failures

**Resolution**

Configured API Gateway JWT Authorizer with the correct Cognito issuer URL and audience.

---

## Challenge 3

Amazon Bedrock model access

**Resolution**

Switched to a supported Claude model after identifying marketplace and model availability restrictions.

---

## Challenge 4

Frontend authentication flow

**Resolution**

Implemented browser token exchange, session management, login state handling, and logout functionality.

---

## Challenge 5

CORS configuration

**Resolution**

Configured API Gateway CORS to allow the CloudFront origin and required Authorization and Content-Type headers.

---

## Lessons Learned

* OAuth configuration requires exact redirect URIs.
* JWT Authorizers simplify backend security.
* Browser CORS configuration is essential for authenticated APIs.
* CloudWatch logs are the primary troubleshooting tool for Lambda-based applications.
* Amazon Bedrock model availability should be verified before implementation.
