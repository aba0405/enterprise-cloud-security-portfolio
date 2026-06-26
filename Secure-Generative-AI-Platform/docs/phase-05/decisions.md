# Architecture Decisions - Phase 05

## Decision 1

### Use Amazon Bedrock Instead of Calling a Foundation Model Directly

### Reason

Amazon Bedrock provides:

* Fully managed access to foundation models
* Unified API across multiple AI providers
* No infrastructure to manage
* Enterprise security and IAM integration
* Native AWS service integration

This allows the application to leverage generative AI without provisioning or managing GPU infrastructure.

---

## Decision 2

### Invoke Bedrock from AWS Lambda Instead of the Frontend

### Reason

The frontend should never communicate directly with Amazon Bedrock.

Using AWS Lambda provides:

* Protection of AWS credentials
* Centralized business logic
* Request validation
* Audit logging
* Prompt filtering
* Future integration with authorization and security controls

This architecture follows AWS security best practices by keeping AI service access on the server side.

---

## Decision 3

### Store the Model Identifier as an Environment Variable

### Reason

The Bedrock model identifier is stored as a Lambda environment variable instead of being hardcoded.

Benefits include:

* Easier model upgrades
* Environment-specific configuration
* Cleaner application code
* Improved operational flexibility
* Better support for Dev, Test, and Production environments
