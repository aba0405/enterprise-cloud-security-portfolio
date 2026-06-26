# Interview Notes - Phase 06

## Interview Questions

### 1. Why validate JWT tokens in API Gateway instead of Lambda?

**Answer**

API Gateway validates JWT tokens before invoking Lambda. This blocks unauthorized requests early, reduces Lambda execution, minimizes Amazon Bedrock usage, lowers operational costs, and simplifies backend application logic.

---

### 2. What is the difference between authentication and authorization?

**Answer**

Authentication verifies the identity of the user, while authorization determines whether that authenticated user is permitted to access a protected resource.

---

### 3. Why use OAuth 2.0 Authorization Code Flow?

**Answer**

The Authorization Code Flow securely authenticates users through Amazon Cognito Hosted UI and exchanges a short-lived authorization code for signed JWT tokens without exposing user credentials to the application.

---

### 4. Why use Amazon Cognito Hosted UI?

**Answer**

The Hosted UI provides a managed authentication experience that supports OAuth 2.0, OpenID Connect, multi-factor authentication, and federation without requiring custom login infrastructure.

---

### 5. How did you troubleshoot the integration?

**Answer**

I validated each layer independently:

* Verified Cognito authentication.
* Confirmed JWT token issuance.
* Tested API Gateway authorization.
* Reviewed CloudWatch logs for backend errors.
* Verified Amazon Bedrock model availability using the Bedrock Playground.
* Updated the application to use a supported inference profile before re-testing the end-to-end workflow.

This systematic approach isolated the root cause without unnecessary code changes.
