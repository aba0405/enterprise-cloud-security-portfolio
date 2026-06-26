# Challenges and Resolutions - Phase 04

## Challenge 1

### Problem

The Lambda function did not appear while configuring the API Gateway integration.

### Root Cause

The integration type (**AWS Lambda**) had not been selected before searching for the Lambda function.

### Resolution

Selected **AWS Lambda** as the integration type. After selecting the correct integration type, the Lambda function became available for selection.

### Lesson Learned

Always select the appropriate integration type before searching for backend resources in API Gateway.

---

## Challenge 2

### Problem

The API returned:

```
404 Not Found
```

### Root Cause

The request was sent to:

```
https://<invoke-url>
```

instead of:

```
https://<invoke-url>/chat
```

The `/chat` resource path was missing from the request URL.

### Resolution

Updated the Postman request to include the `/chat` route.

### Lesson Learned

Always include the resource path defined in Amazon API Gateway when testing API endpoints. A successful API deployment does not imply that requests sent to the API root will automatically resolve to a configured route.
