# GuardDuty Incident Response Runbook

## Purpose

This runbook defines the process for investigating and responding to Amazon GuardDuty findings.

---

## Detection Sources

* Amazon GuardDuty
* AWS Security Hub
* Amazon Detective
* Amazon Inspector

---

## Investigation Procedure

### Step 1: Review Finding

Review:

* Finding ID
* Severity
* Resource affected
* Attack type
* Region
* AWS Account

---

### Step 2: Validate Threat

Determine whether the finding is:

* True Positive
* False Positive
* Benign Activity

---

### Step 3: Gather Evidence

Collect:

* EC2 Instance ID
* Security Groups
* VPC Information
* IAM Role
* CloudTrail Events

---

### Step 4: Escalate

Escalate Critical findings immediately to Security Operations.

---

## Containment

Critical EC2 findings trigger automated quarantine through Lambda and EventBridge.

---

## Recovery

Restore service after:

* Threat removal
* Security review
* Validation testing

---

## Post-Incident Activities

* Document root cause
* Update detection logic
* Update security controls
* Conduct lessons learned review
