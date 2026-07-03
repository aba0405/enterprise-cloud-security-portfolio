# Phase 04 - Secure API Layer with Amazon API Gateway and AWS Lambda

## Objective

Build a secure serverless API that serves as the backend entry point for the Secure Generative AI Platform. This phase establishes communication between the frontend application and backend services using Amazon API Gateway and AWS Lambda.

---

## AWS Services Used

* Amazon API Gateway (HTTP API)
* AWS Lambda

---

## Architecture

```text
                User
                  │
                  ▼
           Amazon Cognito
                  │
            JWT Token
                  │
                  ▼
      CloudFront (Frontend)
                  │
                  ▼
          Amazon API Gateway
                  │
                  ▼
             AWS Lambda
```

---

## Validation Results

### API Gateway

* HTTP API successfully created
* POST `/chat` route configured
* Route integrated with AWS Lambda
* `$default` stage configured with Auto Deploy

### AWS Lambda

* Lambda function `secure-genai-chat-handler` created
* Function deployed successfully
* API Gateway integration completed

### End-to-End Validation

Request:

```http
POST /chat
```

Response:

```json
{
    "message": "Secure GenAI API is working!",
    "service": "AWS Lambda",
    "phase": "Phase 04"
}
```

The API successfully invoked the Lambda function and returned the expected JSON response.
