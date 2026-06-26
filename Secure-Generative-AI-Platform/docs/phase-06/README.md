# Phase 06 - Secure API with Amazon Cognito JWT Authorizer

## Objective

Secure the Amazon API Gateway endpoint using Amazon Cognito JWT authentication so that only authenticated users can invoke the backend AI service.

---

## AWS Services Used

* Amazon Cognito
* Amazon API Gateway
* AWS Lambda
* Amazon Bedrock
* AWS IAM

---

## Architecture

```text
                User
                  │
                  ▼
      Amazon Cognito Hosted UI
                  │
        OAuth 2.0 Authorization
                  │
             JWT Access Token
                  │
                  ▼
       API Gateway JWT Authorizer
                  │
                  ▼
             AWS Lambda
                  │
                  ▼
          Amazon Bedrock
                  │
                  ▼
       Anthropic Claude Haiku 4.5
```

---

## Validation Results

### Amazon Cognito

* Hosted UI configured successfully.
* OAuth 2.0 Authorization Code flow completed.
* Authorization code exchanged for JWT tokens.
* Access token successfully obtained.

### API Gateway

* JWT Authorizer (`cognito-jwt-authorizer`) created.
* Authorizer attached to the `POST /chat` route.
* API correctly rejected unauthenticated requests.

### Authentication Validation

**Without JWT**

* HTTP Status: **401 Unauthorized**
* Request blocked before reaching Lambda.

**With Valid JWT**

* HTTP Status: **200 OK**
* Request successfully authenticated.
* Lambda executed successfully.
* Amazon Bedrock returned an AI-generated response.

---

## Security Improvements

This phase introduced authentication and authorization for the API.

Security controls implemented:

* OAuth 2.0 Authorization Code Flow
* JWT validation at API Gateway
* Amazon Cognito Hosted UI
* Protected backend endpoint
* Elimination of anonymous API access

---

## Outcome

The Secure Generative AI Platform now requires valid Amazon Cognito authentication before users can invoke Amazon Bedrock. Unauthorized requests are rejected at API Gateway, preventing unnecessary Lambda executions and Bedrock usage.
