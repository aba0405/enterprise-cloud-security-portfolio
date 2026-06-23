# Enterprise Cloud Security Portfolio

A collection of enterprise-scale cloud security projects demonstrating architecture design, security operations, governance, DevSecOps automation, threat detection and response, vulnerability management, and secure AI implementations on AWS.

A --> B["🛡️ Enterprise Security Operations Center (SOC)"]
A --> C["🤖 Secure Generative AI Platform"]
A --> D["🌊 AWS Security Lake Analytics"]
A --> E["🏢 Multi-Account Landing Zone Governance"]
A --> F["⚡ Incident Response Automation"]
A --> G["🔒 DevSecOps Reference Architecture"]

%% SOC
B --> B1["GuardDuty"]
B --> B2["Security Hub"]
B --> B3["Detective"]
B --> B4["Inspector"]
B --> B5["EventBridge + Lambda"]

%% GenAI
C --> C1["Amazon Bedrock"]
C --> C2["Private Knowledge Base"]
C --> C3["IAM & KMS"]
C --> C4["Content Filtering"]
C --> C5["Audit Logging"]

%% Security Lake
D --> D1["Security Lake"]
D --> D2["Athena"]
D --> D3["QuickSight"]
D --> D4["CloudTrail Analytics"]
D --> D5["Threat Hunting"]

%% Landing Zone
E --> E1["AWS Organizations"]
E --> E2["Control Tower"]
E --> E3["SCP Policies"]
E --> E4["Centralized Logging"]
E --> E5["Account Factory"]

%% Incident Response
F --> F1["Automated Isolation"]
F --> F2["EBS Snapshots"]
F --> F3["SNS Alerts"]
F --> F4["Forensics Collection"]
F --> F5["SOAR Workflow"]

%% DevSecOps
G --> G1["GitHub Actions"]
G --> G2["SAST"]
G --> G3["DAST"]
G --> G4["Container Security"]
G --> G5["IaC Scanning"]




