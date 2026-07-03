# Interview Notes - Phase 05

## Interview Questions

### 1. Why use Amazon Bedrock instead of hosting your own LLM?

**Answer**

Amazon Bedrock provides managed access to multiple foundation models without requiring infrastructure management. It simplifies model selection, integrates with IAM, scales automatically, and eliminates the operational overhead of managing GPU instances.

---

### 2. Why invoke Amazon Bedrock from AWS Lambda instead of directly from the frontend?

**Answer**

Invoking Bedrock from Lambda protects AWS credentials, centralizes business logic, enables request validation, supports logging and monitoring, and allows future implementation of authorization, prompt filtering, and security controls.

---

### 3. What is an inference profile?

**Answer**

An inference profile is a managed endpoint that routes requests to supported foundation models. Some newer Amazon Bedrock models require inference profiles instead of direct model identifiers, providing a consistent way to invoke models across supported AWS Regions.

---

### 4. Why use Lambda environment variables for the model ID?

**Answer**

Environment variables separate configuration from application code, making it easier to change models across environments without modifying or redeploying the source code.

---

### 5. How would you secure this architecture for production?

**Answer**

* Validate Amazon Cognito JWT tokens using an API Gateway authorizer.
* Apply least-privilege IAM permissions.
* Encrypt sensitive data using AWS KMS.
* Enable CloudWatch logging and monitoring.
* Protect the API with AWS WAF.
* Implement prompt validation and input sanitization.
* Enable GuardDuty and Security Hub for continuous security monitoring.
