# Architecture Decisions

## Decision 1

Use Amazon Cognito Hosted UI instead of implementing custom authentication.

**Reason**

Reduces development effort while providing a secure OAuth 2.0 compliant authentication solution.

---

## Decision 2

Use OAuth 2.0 Authorization Code Flow.

**Reason**

Authorization Code Flow provides secure token exchange suitable for browser applications and avoids exposing credentials.

---

## Decision 3

Protect API Gateway using a JWT Authorizer.

**Reason**

Authentication is enforced before Lambda execution, reducing unnecessary compute and simplifying backend authorization.

---

## Decision 4

Use sessionStorage for browser tokens.

**Reason**

Tokens are removed when the browser session ends and are not persisted permanently like localStorage.

---

## Decision 5

Invoke Amazon Bedrock through Lambda.

**Reason**

The frontend never communicates directly with Bedrock, keeping AWS credentials isolated within the backend.
