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