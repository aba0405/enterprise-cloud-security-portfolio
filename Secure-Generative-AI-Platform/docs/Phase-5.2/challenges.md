# Challenges Encountered

## Challenge 1

Lambda execution timed out after introducing DynamoDB.

**Resolution**

Increased the Lambda timeout from 3 seconds to 30 seconds to allow sufficient time for both the Bedrock inference and DynamoDB write operation.

---

## Challenge 2

IAM permissions for DynamoDB.

**Resolution**

Attached AmazonDynamoDBFullAccess to the Lambda execution role during development.

> Future Improvement:
> Replace the managed policy with a least-privilege IAM policy granting access only to the required table.

---

## Challenge 3

Conversation persistence.

**Resolution**

Validated successful writes by inspecting stored items in the DynamoDB table and reviewing CloudWatch logs.

## Lessons Learned

* AI inference can exceed default Lambda timeout settings.
* DynamoDB integrates seamlessly with Lambda for serverless applications.
* CloudWatch is the primary troubleshooting tool for identifying runtime issues.
* Proper IAM permissions are required before introducing new AWS services.
