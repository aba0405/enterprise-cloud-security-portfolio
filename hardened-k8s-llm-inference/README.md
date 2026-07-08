# Hardened Kubernetes Platform for Secure LLM Inference

A defense-in-depth Kubernetes security platform for running LLM inference
workloads, built layer by layer with a documented threat model, live attack/defense
demonstrations, and CI/CD-integrated image scanning.

/ **Stack:** Kubernetes (kind), Kyverno, Pod Security Admission, Network Policies,
Trivy, GitHub Actions. **Pattern:** least privilege + default-deny at every layer.

---

## Why this project
LLM inference workloads are high-value targets: expensive compute, sensitive model
weights and prompts, and API keys worth stealing. A single compromised Pod should
never mean a compromised cluster. This platform enforces that guarantee through
seven independent, composing controls — so a breach of one layer is contained by
the next.

## Threat model → control mapping
| Threat | Control | Module |
|--------|---------|--------|
| Container breakout to host node | Non-root, dropped caps, read-only FS, seccomp | 01 |
| Lateral movement across tenants | Namespace tenancy + default-deny NetworkPolicy | 02, 04 |
| Stolen ServiceAccount token → API abuse | Least-privilege RBAC, no token automount | 03 |
| Vulnerable base images (CVEs) | Trivy scanning + CI/CD gate + minimal images | 05 |
| Insecure workloads reaching the cluster | PSA (restricted) + Kyverno custom policies | 06 |
| Resource-exhaustion / DoS | Kyverno-enforced resource limits | 06 |
| Plaintext secrets in etcd | Encryption at rest + External Secrets (AWS SM) | 07 |

## Key results (measured in this lab)
- **~98.7% reduction in HIGH/CRITICAL image vulnerabilities** (1,519 → 20) by moving
  from an end-of-life full base image to a minimal, current one — validated with Trivy.
- **Lateral movement blocked:** a Pod in the `monitoring` namespace could reach the
  inference API (HTTP 200) until a default-deny NetworkPolicy was applied, after which
  cross-namespace traffic was dropped (timeout). Authorized clients (label-selected)
  retained access.
- **Policy enforcement proven:** a fully PSA-compliant Pod lacking resource limits was
  automatically rejected at admission by a custom Kyverno policy.
- **Least privilege proven:** the inference ServiceAccount is verifiably denied
  `get secrets` and cross-namespace access (`kubectl auth can-i` → no).

## Architecture (namespaces as isolation boundaries)
- `llm-inference` — the workload. PSA: **restricted**. Default-deny networking with a
  label-based allow. Least-privilege ServiceAccount. Kyverno resource-limit enforcement.
- `monitoring` — observability tier. PSA: baseline (restricted warn).
- `security-tools` — security tooling tier. PSA: restricted.

## Repo layout
    manifests/
      01-pods/               securityContext hardening (insecure vs secure)
      02-namespaces/         tenancy isolation model
      03-rbac/               least-privilege SA, Role, RoleBinding
      04-network-policies/   default-deny + label-based allow
      05-image-security/     Trivy scans + base-image comparison
      06-admission-control/  PSA labels + Kyverno policies
      07-runtime-secrets/    secrets gap, ESO/AWS pattern, Falco concept
      08-capstone/           full secured inference Deployment + Service
    docs/
      interview-prep.md      threat-model Q&A companion
    .github/workflows/
      trivy-scan.yml         CI/CD image-scanning gate

## Reproduce
    kind create cluster --name k8s-security-lab
    kubectl apply -f manifests/02-namespaces/
    kubectl apply -f manifests/03-rbac/
    kubectl apply -f manifests/04-network-policies/
    kubectl apply -f manifests/06-admission-control/
    kubectl apply -f manifests/08-capstone/

## Evidence (live demonstrations)

**Pod hardening — same app, root vs non-root + read-only filesystem**
![Pod security context comparison](docs/screenshots/01-pod-whoami-comparison.png)

**Least-privilege RBAC — ServiceAccount denied secrets and cross-namespace access**
![RBAC can-i results](docs/screenshots/03-rbac-can-i.png)

**Network policy — lateral movement blocked (authorized 200, attacker 000)**
![NetworkPolicy enforcement](docs/screenshots/04-network-policy-block.png)

**Image scanning — 98.7% CVE reduction via minimal base image (1519 → 20)**
![Trivy base image comparison](docs/screenshots/05-trivy-comparison.png)

**Admission control — Kyverno rejects a non-compliant workload at deploy time**
![Kyverno policy rejection](docs/screenshots/06-kyverno-rejection.png)

**Capstone — full secured inference Deployment running under all controls**
![Capstone deployment](docs/screenshots/08-capstone-deployment.png)
