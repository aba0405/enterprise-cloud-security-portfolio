# Interview Notes

## Topics Demonstrated

* OAuth 2.0 Authorization Code Flow
* Amazon Cognito Hosted UI
* JWT Authentication
* API Gateway JWT Authorizer
* AWS Lambda Integration
* Amazon Bedrock Converse API
* CloudFront static website hosting
* Browser session management
* CORS troubleshooting
* CloudWatch log analysis

---

## Possible Interview Questions

### Why use Cognito instead of implementing authentication manually?

Amazon Cognito provides a managed identity service supporting OAuth 2.0, OpenID Connect, MFA, user management, and secure token issuance without maintaining authentication infrastructure.

---

### Why protect API Gateway instead of Lambda?

Authentication at API Gateway prevents unauthorized requests from invoking Lambda, improving both security and cost efficiency.

---

### Why use JWT?

JWT tokens allow API Gateway to validate authenticated users without maintaining server-side sessions.

---

### How is Amazon Bedrock secured?

The browser authenticates with Cognito, API Gateway validates the JWT, Lambda executes using IAM permissions, and only Lambda communicates with Amazon Bedrock.

---

### What was the biggest implementation challenge?

The most time-consuming portion was integrating OAuth authentication, JWT authorization, browser session management, CORS configuration, and Bedrock into a single end-to-end workflow while maintaining secure communication across all AWS services.
