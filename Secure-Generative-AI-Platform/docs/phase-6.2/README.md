# Phase 06 – Security Hardening

## Overview

Phase 06 focused on strengthening the security posture of the Secure Generative AI Platform by applying AWS security best practices to existing infrastructure. Instead of introducing new services, this phase improved IAM permissions, verified encryption, validated secure communications, and confirmed that sensitive resources were protected using least-privilege principles.

## Objectives

* Replace broad IAM permissions with a least-privilege policy
* Validate secure Lambda access to DynamoDB
* Verify HTTPS enforcement through CloudFront
* Verify DynamoDB encryption at rest
* Validate Lambda environment variables
* Confirm JWT authorization on protected APIs

## AWS Services Used

* AWS IAM
* Amazon API Gateway
* AWS Lambda
* Amazon CloudFront
* Amazon DynamoDB
* Amazon S3

## Security Improvements

* Replaced `AmazonDynamoDBFullAccess` with a custom least-privilege IAM policy
* Restricted DynamoDB access to only the required table
* Verified HTTPS-only communication through CloudFront
* Confirmed encryption at rest for DynamoDB
* Validated secure JWT authentication using API Gateway
* Reviewed Lambda configuration to ensure no secrets were stored in environment variables

## Validation

* AI application continued functioning after removing broad IAM permissions
* Conversations continued to be stored successfully in DynamoDB
* Secure communication and authorization were verified

## Definition of Done

* ✅ Least-privilege IAM implemented
* ✅ HTTPS verified
* ✅ Encryption verified
* ✅ JWT authorization verified
* ✅ Documentation completed
