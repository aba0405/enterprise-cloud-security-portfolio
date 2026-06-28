# Architecture Decisions

## Decision 1

Generate security events directly from AWS Lambda.

**Reason**

Application-layer security events provide visibility into malicious prompt attempts before AI model invocation.

---

## Decision 2

Use Amazon CloudWatch as the centralized logging platform.

**Reason**

CloudWatch provides native AWS integration and supports future alerting and monitoring.

---

## Decision 3

Provision Amazon SNS for security notifications.

**Reason**

SNS enables future real-time alerting and integration with operational workflows.