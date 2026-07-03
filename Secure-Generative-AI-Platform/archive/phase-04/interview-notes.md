# Interview Notes - Phase 04

## Interview Questions

### 1. Why use Amazon API Gateway?

**Answer**

Amazon API Gateway provides a fully managed, scalable, and secure API layer. It offers HTTPS endpoints, request routing, native AWS Lambda integration, JWT authorization, monitoring, throttling, and integration with other AWS services without requiring server management.

---

### 2. HTTP API vs REST API

**HTTP API**

* Lower cost
* Lower latency
* Simpler configuration
* Native JWT authorization
* Best suited for modern serverless applications

**REST API**

* Supports API Keys
* Usage Plans
* Request/Response transformations
* Advanced authorization options
* Better suited for complex enterprise APIs requiring advanced API management features

---

### 3. Why use POST instead of GET?

**Answer**

The chat endpoint accepts user prompts in the request body. POST is appropriate because it supports request payloads, avoids URL length limitations, and prevents sensitive prompts from being exposed in query strings or browser history.

---

### 4. Why place AWS Lambda behind API Gateway?

**Answer**

API Gateway provides a secure and managed entry point to backend services. It handles request routing, authentication, authorization, monitoring, throttling, and HTTPS termination, while Lambda focuses solely on executing business logic.

---

### 5. How would you secure this API using Amazon Cognito?

**Answer**

Configure Amazon Cognito as a JWT authorizer within API Gateway. Incoming JWT tokens would be validated before the request reaches AWS Lambda. Only authenticated users with valid tokens would be allowed to invoke the backend API, eliminating the need for Lambda to perform authentication itself.
