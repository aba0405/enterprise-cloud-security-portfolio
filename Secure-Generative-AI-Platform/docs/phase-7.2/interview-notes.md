# Interview Notes

## Topics Demonstrated

* Prompt Injection
* AI Application Security
* Input Validation
* Defense in Depth
* AWS Lambda
* Amazon Bedrock
* CloudWatch Monitoring

---

## Possible Interview Questions

### Why implement prompt validation before Amazon Bedrock?

Application-layer validation prevents malicious or unsafe prompts from reaching the foundation model, reducing both security risk and unnecessary inference costs.

---

### Why not rely only on Amazon Bedrock Guardrails?

Managed guardrails provide valuable protection, but application-level validation allows organizations to enforce custom security policies before model invocation.

---

### Why log blocked prompts?

Security event logging enables operational monitoring, threat detection, and incident investigation without exposing the application to unnecessary model invocations.

---

### What AI security controls were implemented?

* Empty prompt validation
* Prompt length enforcement
* Prompt injection detection
* Security event logging
* Request blocking before AI inference
