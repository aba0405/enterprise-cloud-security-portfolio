# Project Journal

## Phase 00
- Initialized repository structure.
- Established documentation standards.

## Phase 01
- Built static frontend.
- Separated HTML, CSS, and JavaScript.

## Phase 02
- Deployed frontend to Amazon S3.
- Configured CloudFront with Origin Access Control.
- Troubleshot DNS propagation delay.
- Resolved CloudFront AccessDenied issue.

## Phase 03 - Amazon Cognito Authentication

### Objective
Implement enterprise-grade user authentication using Amazon Cognito.

### Completed
- Created Amazon Cognito User Pool
- Configured Hosted UI
- Configured OAuth callback URL
- Created SPA App Client
- Created test user
- Successfully authenticated through Hosted UI

### AWS Services
- Amazon Cognito

### Status
Completed

## Phase 04 - Secure API Layer

### Objective

Build a serverless API using Amazon API Gateway and AWS Lambda.

### Completed

- Created HTTP API
- Created POST /chat route
- Created Lambda backend
- Connected API Gateway to Lambda
- Successfully tested endpoint using Postman

### AWS Services

- Amazon API Gateway
- AWS Lambda

### Status

Completed

## Phase 05 - Amazon Bedrock Integration

### Objective

Integrate Amazon Bedrock with AWS Lambda to provide AI-generated responses through the backend API.

### Completed

- Submitted Anthropic use case
- Configured Lambda IAM permissions
- Added Bedrock model configuration using environment variables
- Integrated AWS Lambda with Amazon Bedrock
- Successfully invoked Claude Sonnet through API Gateway

### AWS Services

- Amazon Bedrock
- AWS Lambda
- Amazon API Gateway

### Status

Completed

## Phase 06 - Secure API with Amazon Cognito JWT Authentication

### Objective

Secure the serverless backend by implementing Amazon Cognito authentication and JWT authorization through Amazon API Gateway, ensuring only authenticated users can access the AI backend.

### Completed

* Configured Amazon Cognito Hosted UI authentication.
* Implemented OAuth 2.0 Authorization Code Flow.
* Created and attached a JWT Authorizer to the API Gateway `/chat` endpoint.
* Validated unauthorized requests return **401 Unauthorized**.
* Successfully authenticated requests using Cognito Access Tokens.
* Integrated the backend with the supported **Claude Haiku 4.5** inference profile.
* Verified end-to-end communication from Cognito → API Gateway → Lambda → Amazon Bedrock.

### AWS Services

* Amazon Cognito
* Amazon API Gateway
* AWS Lambda
* Amazon Bedrock
* AWS IAM
* Amazon CloudWatch

### Status

Completed ✅
