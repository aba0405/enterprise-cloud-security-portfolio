# EBS Snapshot Preservation Runbook

## Purpose

Preserve evidence before remediation.

---

## Automated Actions

Lambda automatically creates:

* EBS Snapshot
* Timestamped evidence record

---

## Evidence Collection

Capture:

* Snapshot ID
* Volume ID
* Instance ID
* Region
* Incident ID

---

## Chain of Custody

Record:

* Investigator
* Date
* Reason for collection
* Findings

---

## Retention

Store evidence snapshots according to organizational retention requirements.

---

## Closure

Evidence may be deleted only after:

* Incident closure
* Security approval
* Compliance approval
