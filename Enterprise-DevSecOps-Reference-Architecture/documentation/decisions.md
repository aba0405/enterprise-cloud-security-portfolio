# ADR-001

## Decision

Use Docker containers instead of deploying applications directly on virtual machines.

## Context

FinBank Digital requires consistent deployments across development, testing, and production environments while reducing configuration drift.

## Decision

Containerize the Payment Processing API using Docker.

## Rationale

Containers package the application and its dependencies into immutable images, ensuring consistent execution regardless of the underlying host environment. This also enables vulnerability scanning, image versioning, and seamless deployment to Amazon ECS.

## Consequences

Positive:
- Consistent deployments
- Faster releases
- Easier scalability
- Improved portability
- Supports DevSecOps practices

Trade-offs:
- Additional learning curve
- Requires image lifecycle management