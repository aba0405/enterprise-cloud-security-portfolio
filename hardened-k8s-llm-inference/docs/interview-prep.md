# Kubernetes Security — Interview Prep

Study companion for the Hardened K8s LLM Inference platform.
Each entry: the question, the answer structure (Risk → Blast Radius → Control),
and the model answer.

---

## Q1 — Container running as root
**Q:** What are the security risks of a container running as root, and how do you prevent it?

**Model answer:** Containers share the host kernel rather than virtualizing it, so
root-in-container is UID 0 on the host kernel. If an attacker gets code execution in a
root container, they can attempt a container breakout via a kernel bug, a mounted host
path, or an over-permissive capability — and if it works they have root on the *node*,
not just the app. Blast radius: every other Pod on that node, their mounted secrets and
ServiceAccount tokens, and lateral movement across the cluster.

**Controls (securityContext):**
- `runAsNonRoot: true` — K8s refuses to start a root container
- `runAsUser: <non-zero>` — explicit non-root UID
- `allowPrivilegeEscalation: false` — blocks setuid escalation
- `readOnlyRootFilesystem: true` — attacker can't write a payload to disk
- `capabilities: drop: [ALL]` — strip Linux capabilities, add back only what's needed
- `seccompProfile: RuntimeDefault` — filter dangerous syscalls
- Enforce cluster-wide via Pod Security Standards / policy engine (not per-developer)

---

## Q2 — Are namespaces a security boundary?
**Q:** Is a namespace a security boundary? Can a Pod in one namespace attack a workload in another?

**Model answer:** No — a namespace by itself is NOT a hard security boundary. It's an
organizational and RBAC-scoping boundary.
- What it separates: names, RBAC scope, resource quotas.
- What it does NOT separate by default: the network (K8s networking is flat — any Pod can
  reach any Pod across namespaces until Network Policies are applied), and the node/kernel
  (Pods from different namespaces share nodes, so a breakout crosses namespace lines).
- A namespace only *becomes* a security boundary when you layer on Network Policies (traffic),
  RBAC (access), Pod Security Standards, and resource quotas. Namespaces are where those
  controls attach — the namespace alone isn't the wall.

---

## Q3 — Compromised Pod + RBAC blast radius
**Q:** A Pod is compromised. How does RBAC decide if it's minor or a full cluster takeover?

**Model answer:** First thing an attacker does inside a Pod is look for the mounted
ServiceAccount token at /var/run/secrets/kubernetes.io/serviceaccount/. If present, they
use it to authenticate to the Kubernetes API. What happens next is entirely decided by that
ServiceAccount's RBAC:
- If it's the default SA with broad or cluster-admin rights → they list secrets, create
  Pods, escalate → cluster takeover.
- If it's a least-privilege SA (dedicated, minimal Role, no token auto-mount) → the token
  isn't even there to steal, and even if it were, it can only read one resource type in one
  namespace → contained, minor incident.

**Controls I implemented:**
- Dedicated ServiceAccount per workload (not `default`)
- `automountServiceAccountToken: false` — no token mounted unless needed
- Namespace-scoped Role with minimal verbs/resources (read-only configmaps, no secrets)
- Verified with `kubectl auth can-i` — proved the SA cannot read secrets or cross namespaces

**Key principle:** RBAC is what converts "attacker got into a Pod" into either "so what" or
"game over." Least privilege on ServiceAccounts is the single highest-leverage K8s control.
