# ADR-003: Amazon Inspector Selection

## Context

The project required continuous vulnerability management for AWS workloads.

## Decision

Amazon Inspector was selected as the primary vulnerability management service.

## Alternatives Considered

- Qualys
- Tenable
- Rapid7

## Rationale

Inspector provides native integration with AWS services including EC2, ECR, Lambda, and Security Hub.

## Tradeoffs

Pros:
- AWS-native
- Minimal deployment effort
- Automatic Security Hub integration

Cons:
- Limited multi-cloud visibility
- Less mature than some enterprise scanners

## Outcome

Inspector enabled continuous vulnerability assessment and centralized reporting through Security Hub.