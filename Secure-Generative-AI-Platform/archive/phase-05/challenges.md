# Challenges and Resolutions - Phase 05

## Challenge 1

### Problem

The Lambda function returned an HTTP 500 Internal Server Error when attempting to invoke Amazon Bedrock.

### Root Cause

CloudWatch logs revealed that the configured model did not support on-demand invocation and required an inference profile instead.

### Resolution

Updated the `MODEL_ID` environment variable to use the global Anthropic Claude Sonnet inference profile instead of the base model identifier.

### Lesson Learned

Newer Amazon Bedrock foundation models may require inference profiles rather than direct model identifiers. CloudWatch logs provide the fastest way to identify configuration issues.

---

## Challenge 2

### Problem

The Amazon Bedrock documentation referenced a "Model Access" page that no longer existed.

### Root Cause

AWS has updated the Amazon Bedrock console. Access to supported serverless models is now managed differently, and the previous Model Access workflow has been retired.

### Resolution

Completed the required Anthropic use case submission and proceeded with model invocation using the current Amazon Bedrock workflow.

### Lesson Learned

AWS services evolve frequently. Always validate implementation steps against the current AWS Console and official documentation instead of relying solely on older tutorials.

---

## Challenge 3

### Problem

Amazon Bedrock requests failed until the Lambda execution role received additional permissions.

### Root Cause

The Lambda execution role initially lacked permission to invoke Amazon Bedrock models.

### Resolution

Created an inline IAM policy granting:

* `bedrock:InvokeModel`
* `bedrock:InvokeModelWithResponseStream`

### Lesson Learned

When integrating AWS managed services, verify IAM permissions before troubleshooting application code.
