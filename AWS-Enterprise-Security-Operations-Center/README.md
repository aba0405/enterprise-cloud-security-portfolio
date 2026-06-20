1. Architecture Overview
2. AWS Organizations Setup
3. GuardDuty Deployment
4. Security Hub Deployment
5. Inspector Deployment
6. Threat Detection Validation
7. ## Threat Detection Validation

### Scenario

GuardDuty Attack Sequence Detection

### Finding

AttackSequence:EC2/CompromisedInstanceGroup

### Severity

Critical

### Services Involved

- Amazon GuardDuty
- AWS Security Hub
- Amazon EC2

### Description

GuardDuty generated a critical attack sequence finding indicating potential EC2 compromise and command-and-control activity. The finding was automatically ingested into Security Hub for centralized investigation and prioritization.

### Validation Evidence

- screenshots/07-attack-simulation/attack-sequence-ec2-compromise.png
- screenshots/07-attack-simulation/command-and-control-resource.png

### Outcome

Successfully validated end-to-end threat detection using AWS-native security services and confirmed integration between GuardDuty and Security Hub.
8. Automated Incident Response
9. Lessons Learned
10. Tradeoffs and Design Decisions
11. Future Enhancements