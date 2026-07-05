# Enterprise DevSecOps Reference Architecture

## Business Problem

FinBank needs a secure CI/CD pipeline that automatically builds, scans, and deploys containerized applications while preventing vulnerable container images from reaching production.

---

# Architecture

> Replace with your final architecture diagram

![Architecture](assets/architecture.png)

---

# Technology Stack

- Docker
- Amazon ECR
- Amazon Inspector
- AWS CodeBuild
- Amazon ECS
- Amazon CloudWatch
- Amazon SNS
- GitHub Actions
- IAM

---

# Project Progress

| Phase | Status |
|--------|--------|
| Docker | ✅ |
| Amazon ECR | ✅ |
| Amazon Inspector | ✅ |
| AWS CodeBuild | ⏳ |
| Amazon ECS | ⬜ |
| CloudWatch | ⬜ |
| SNS | ⬜ |

---

# Phase 01 - Docker

## Objective

Containerize the Flask Payment API.

## Implementation

```bash
docker build -t finbank-payment-api .
docker run -d -p 5000:5000 finbank-payment-api
```

## Validation

![Docker Build](assets/phase01-docker-build.png)

![Docker Running](assets/phase01-running.png)

## Result

- Application successfully containerized.
- Verified locally using Docker.

---

# Phase 02 - Amazon ECR

## Objective

Store Docker images in a private AWS container registry.

## Implementation

```bash
aws ecr get-login-password ...
docker tag ...
docker push ...
```

## Validation

![ECR Repository](assets/phase02-ecr.png)

## Challenge

**Issue**

IAM user could not authenticate with Amazon ECR.

**Resolution**

Granted the required ECR permissions and successfully authenticated.

## Result

- Docker image successfully pushed to Amazon ECR.
- Private image registry established.

---

# Phase 03 - Amazon Inspector

## Objective

Automatically scan container images for vulnerabilities.

## Validation

![Inspector Dashboard](assets/phase03-inspector-dashboard.png)

![Inspector Findings](assets/phase03-findings.png)

## Result

- Amazon Inspector enabled.
- ECR repository covered.
- Automatic vulnerability scanning configured.
- No critical findings detected.

---

# Upcoming Work

- AWS CodeBuild
- Amazon ECS
- CloudWatch
- SNS
- GitHub Actions

---

# Lessons Learned

- Build once, promote many.
- Store images in ECR instead of developer machines.
- Integrate vulnerability scanning before deployment.
- Follow least privilege for IAM permissions.