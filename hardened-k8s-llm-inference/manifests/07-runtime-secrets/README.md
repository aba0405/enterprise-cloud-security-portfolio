# Module 07 — Runtime Security & Secrets

## Problem: Kubernetes Secrets are NOT encrypted by default
Native Secrets are base64-*encoded*, not encrypted. Anyone with read access to
the Secret object or to etcd can decode them in one command:

    kubectl get secret <name> -o jsonpath='{.data.key}' | base64 -d

This returns plaintext. Base64 is encoding, not encryption.

## Controls (increasing maturity)

### 1. RBAC least privilege on Secrets
Restrict which ServiceAccounts/users can `get`/`list` Secrets. (See Module 03 —
the inference ServiceAccount is explicitly denied secret access.)

### 2. Encryption at rest
Configure the API server with an EncryptionConfiguration so Secrets are encrypted
before being written to etcd (AES-CBC/AES-GCM, or a KMS provider).

### 3. External Secrets Manager (production-grade) — RECOMMENDED
Do not store real secrets in Kubernetes at all. Keep them in AWS Secrets Manager
and sync via the External Secrets Operator (ESO). Benefits: central rotation,
audit logging, IAM-based access, no plaintext in etcd.

See `external-secret-example.yaml` for the ESO pattern.

## Runtime detection (concept)
Admission control (Module 06) stops bad workloads at deploy time. Runtime security
catches malicious behavior *after* a Pod is running — e.g., a compromised container
spawning a shell, making unexpected network connections, or reading /etc/shadow.
Tools: Falco (CNCF) watches syscalls and alerts on suspicious runtime behavior.
This complements admission control: prevention at the door + detection inside.
