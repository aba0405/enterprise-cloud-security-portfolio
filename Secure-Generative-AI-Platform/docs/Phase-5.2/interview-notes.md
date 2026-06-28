# Interview Notes

## Topics Demonstrated

* Amazon DynamoDB
* Serverless data persistence
* AWS Lambda integration
* Conversation logging
* Amazon Bedrock
* CloudWatch debugging
* IAM permissions
* Serverless architecture

---

## Possible Interview Questions

### Why use DynamoDB instead of Amazon RDS?

Conversation history is document-oriented, schema-flexible, and benefits from DynamoDB's serverless scaling and low operational overhead.

---

### Why store conversations?

Conversation logging enables auditing, troubleshooting, analytics, compliance, and future AI model evaluation.

---

### Why increase the Lambda timeout?

The default timeout was insufficient once the Lambda needed to invoke Amazon Bedrock and persist conversation data. Increasing the timeout ensured reliable completion of both operations.

---

### What data is stored?

Each conversation record contains:

* Session ID
* Timestamp
* User prompt
* AI response
* Model identifier

---

### Future Improvements

* Group multiple prompts under a single session ID.
* Add user identity information from Cognito.
* Archive older conversations to Amazon S3.
* Add encryption and retention policies for compliance.
