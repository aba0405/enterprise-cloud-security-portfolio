# Hardened Kubernetes Platform for Secure LLM Inference

A security-first Kubernetes platform built module by module, hardening every
layer: pod security, namespaces, RBAC, network policies, image security, and
admission control. Target workload: a self-hosted LLM inference service.

## Threat model
Each module documents a real attack path and the control that closes it.

## Modules
- [x] 01 — Pod Security & Security Context
- [ ] 02 — Namespaces & Tenancy Isolation
- [ ] 03 — RBAC & Least Privilege
- [ ] 04 — Network Policies (default-deny)
- [ ] 05 — Image Security (scanning & signing)
- [ ] 06 — Admission Control (Pod Security Standards / policy engine)
- [ ] 07 — Runtime & Secrets
- [ ] 08 — Capstone: Secure LLM Inference

## Module 01 — Pod Security & Security Context
**Problem:** By default, containers run as root with a writable filesystem and
all Linux capabilities. A compromised app can escalate toward the host node.

**Control:** A hardened `securityContext` enforcing non-root execution, a
read-only root filesystem, no privilege escalation, dropped capabilities, and
the runtime default seccomp profile.

See `manifests/01-pods/` for the insecure baseline vs. the hardened manifest.
