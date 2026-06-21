# EC2 Quarantine Runbook

## Purpose

Isolate compromised EC2 instances from the network.

---

## Automated Response

The following workflow is executed automatically:

GuardDuty
→ EventBridge
→ Lambda
→ Quarantine Security Group

---

## Validation Steps

Verify:

* Instance remains running
* Quarantine Security Group attached
* No inbound rules
* No outbound rules

---

## Investigation

Review:

* Running processes
* CloudTrail activity
* Security Group history
* Network activity

---

## Recovery

After investigation:

1. Remove quarantine group
2. Restore approved security group
3. Validate application functionality
4. Close incident
