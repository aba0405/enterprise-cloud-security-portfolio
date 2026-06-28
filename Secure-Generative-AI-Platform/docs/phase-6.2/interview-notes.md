# Interview Notes

## Topics Demonstrated

* Principle of Least Privilege
* IAM Policies
* JWT Authentication
* HTTPS Enforcement
* Encryption at Rest
* AWS Security Best Practices

---

## Possible Interview Questions

### Why replace AmazonDynamoDBFullAccess?

Managed policies grant unnecessary permissions. A least-privilege policy limits the Lambda function to only the required DynamoDB actions, reducing the attack surface.

---

### Why use a JWT Authorizer?

API Gateway validates JWTs before invoking Lambda, preventing unauthorized requests and reducing unnecessary compute costs.

---

### Why verify HTTPS?

HTTPS protects data in transit by encrypting communication between clients and AWS services.

---

### What security improvements were implemented?

* Custom IAM policy
* JWT authentication
* HTTPS enforcement
* DynamoDB encryption
* Environment variable review
* Resource permission validation
