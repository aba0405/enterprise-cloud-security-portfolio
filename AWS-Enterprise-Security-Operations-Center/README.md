# AWS Enterprise Security Operations Center

## Table of Contents

1. Architecture Overview
2. AWS Organizations Setup
3. GuardDuty Deployment
4. Security Hub Deployment
5. Inspector Deployment
6. Threat Detection Validation
7. Automated Incident Response
8. Lessons Learned
9. Tradeoffs and Design Decisions

# Threat Detection Validation

## Scenario

GuardDuty Attack Sequence Detection

## Finding

AttackSequence:EC2/CompromisedInstanceGroup

## Severity

Critical

## Evidence

![Attack Sequence](screenshots/07-attack-simulation/attack-sequence-ec2-compromise.png)

![Command and Control](screenshots/07-attack-simulation/command-and-control-resource.png)

## Outcome

Successfully validated GuardDuty attack sequence detection and Security Hub integration.

# Automated Incident Response

## Objective

Notify security teams when GuardDuty identifies critical threats.

## Workflow

GuardDuty → EventBridge → SNS → Email

## Benefits

- Near real-time alerting
- Reduced mean time to detection
- Centralized notification workflow

## Status

In Progress

## Automated Incident Response

Implemented EventBridge rules to process GuardDuty findings and route security events to SNS notification channels.

Services:
- GuardDuty
- EventBridge
- SNS

Outcome:
Established event-driven security notification architecture for threat detection workflows.

## Event-Driven Security Notifications

Implemented EventBridge integration for GuardDuty findings and SNS notifications.

Architecture:

GuardDuty → EventBridge → SNS → Email

Validation:

- EventBridge rule created
- SNS topic configured
- Email subscription confirmed
- GuardDuty sample findings generated

Notes:

AWS sample findings were successfully generated and centralized in Security Hub. EventBridge integration was configured as the foundation for production notification workflows.

# Threat Investigation

## Services

- Amazon Detective
- Amazon GuardDuty
- AWS Security Hub

## Objective

Investigate and correlate security findings to accelerate incident response.

## Validation

Amazon Detective was enabled and integrated with the centralized security operations environment.

## Notes

Due to the lab environment and limited telemetry history, Detective did not generate finding groups during the testing window. The integration architecture was successfully deployed and validated.

# Automated Containment

## Quarantine Security Group

A dedicated security group was created to isolate compromised EC2 instances detected by GuardDuty.

### Characteristics

- No inbound rules
- No outbound rules

### Purpose

Preserve compromised systems for forensic investigation while preventing lateral movement and command-and-control communication.

# Automated EC2 Quarantine

## Objective

Automatically isolate compromised EC2 instances identified by security monitoring services.

## Architecture

GuardDuty
    ↓
EventBridge
    ↓
Lambda
    ↓
Quarantine Security Group
    ↓
Isolated EC2 Instance

## Components

- Amazon GuardDuty
- Amazon EventBridge
- AWS Lambda
- Amazon EC2
- Security Groups

## Validation

A Lambda function successfully modified the security group of a test EC2 instance and attached the quarantine security group.

Instance:
i-037cdd43c2179f856

Quarantine Security Group:
sg-044c03f6ebfdcfefe

## Outcome

Compromised workloads can be automatically isolated to prevent lateral movement and outbound command-and-control communications while preserving forensic evidence.

## Infrastructure as Code

Core security automation resources were codified using Terraform to ensure repeatable deployments and version-controlled infrastructure.

### Managed Resources

* Amazon SNS Topic for GuardDuty notifications
* Email subscription for security alerts
* EC2 Quarantine Security Group
* Lambda IAM Role
* EC2 Quarantine IAM Policy

### Terraform Workflow

```bash
terraform init
terraform validate
terraform plan
```

### Benefits

* Repeatable deployments
* Infrastructure version control
* Auditable security changes
* Consistent security configuration across environments
