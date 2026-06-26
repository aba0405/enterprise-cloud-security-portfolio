# ADR-003

## Decision

Use Amazon Cognito User Pools for authentication.

## Context

The application requires enterprise authentication without managing passwords.

## Alternatives Considered

- Custom Authentication
- Auth0
- Azure AD B2C

## Decision

Amazon Cognito

## Rationale

Native AWS integration
OAuth2 support
OIDC support
Hosted UI
JWT Tokens
Scalable