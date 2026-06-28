# Architecture Decisions

## Decision 1

Implement AI security controls within AWS Lambda.

**Reason**

Validate requests before invoking Amazon Bedrock, reducing unnecessary model usage and preventing malicious prompts from reaching the foundation model.

---

## Decision 2

Use pattern-based prompt injection detection.

**Reason**

Provides a lightweight and understandable mechanism for demonstrating AI security concepts in a portfolio project.

---

## Decision 3

Reject blocked requests immediately.

**Reason**

Blocked requests should not consume Amazon Bedrock inference or be persisted in DynamoDB.

---

## Decision 4

Log security events.

**Reason**

CloudWatch security events provide operational visibility and support incident investigation.
