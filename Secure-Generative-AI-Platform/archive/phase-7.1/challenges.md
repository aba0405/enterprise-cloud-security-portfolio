# Challenges Encountered

## Challenge 1

Maintaining Python indentation while extending the Lambda function.

**Resolution**

Adopted complete file replacements instead of partial code modifications to reduce syntax and indentation errors.

---

## Challenge 2

Balancing usability with security.

**Resolution**

Implemented lightweight validation rules that block obvious prompt injection attempts while allowing legitimate user requests.

---

## Challenge 3

Determining where to enforce AI security.

**Resolution**

Implemented application-layer validation before Amazon Bedrock invocation to establish defense in depth.

## Lessons Learned

* AI security controls should execute before model inference.
* Prompt validation reduces unnecessary inference costs.
* CloudWatch provides valuable visibility into blocked requests.
* Defense in depth applies to generative AI applications as well as traditional web applications.
