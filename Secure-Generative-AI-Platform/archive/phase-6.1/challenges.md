# Challenges Encountered

## Challenge 1

Balancing application functionality with least-privilege security.

**Resolution**

Created a custom IAM policy granting only the required DynamoDB permission and validated functionality before removing the managed policy.

---

## Challenge 2

Security verification across multiple AWS services.

**Resolution**

Reviewed CloudFront, API Gateway, Lambda, DynamoDB, and S3 configurations to confirm secure communication and resource protection.

## Lessons Learned

* Least privilege should always be preferred over managed full-access policies.
* Security validation should be performed after every infrastructure change.
* Encryption, HTTPS, and authentication should be verified as part of every deployment.
