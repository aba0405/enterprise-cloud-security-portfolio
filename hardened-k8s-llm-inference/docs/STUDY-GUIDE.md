# Kubernetes Security — ELI5 Study Guide

The whole project explained like you're five, using one story: **an apartment building.**

- The **building** = your cluster.
- Each **apartment** = a namespace.
- A **tenant living in an apartment** = a Pod (your running app).
- The building has a **front-desk guard**, **door locks**, **key cards**, and **rules**. Those are the security controls you built.

---

## The one big idea: defense in depth
Don't rely on a single lock. Use MANY. If a burglar picks one lock, the next one stops them.
You built 6 layers. An attacker has to beat ALL of them.

---

## Module 1 — Pods & Security Context (the tenant's own rules)
**ELI5:** A Pod is a tenant (your app) living in the building. By default, the tenant
is the building SUPER — has every key, can go anywhere, can break walls. That's "running as root."
Dangerous: if a burglar takes over that tenant, they now have the super's powers.

**The fix (securityContext):** Give the tenant only normal-person powers.
- `runAsNonRoot: true` = "you are NOT the super."
- `readOnlyRootFilesystem: true` = "you can't tear down walls" (can't write files).
- `capabilities: drop: [ALL]` = "hand back all the special keys."
- `seccompProfile: RuntimeDefault` = "you can't use dangerous building machinery."

**Why it matters:** A container shares the building's foundation (the host kernel).
Super-powers inside one apartment can break OUT into the whole building. Take the powers away.

**You proved it:** `insecure-pod` said `root`. `secure-pod` said `nginx`. Writing a file failed. 

---

## Module 2 — Namespaces (separate apartments)
**ELI5:** Instead of everyone living in one giant room, you gave each app its own apartment:
`llm-inference` (the valuable one), `monitoring`, `security-tools`.

**The trap (important!):** Apartments have separate DOORS, but by default they share the
same HALLWAY and AIR VENTS. So a burglar in one apartment can still walk to another's door
or crawl through vents. **A namespace ALONE is not a real wall.** It only becomes a wall when
you add door locks (Network Policies) and key cards (RBAC).

**You proved it:** A Pod in `llm-inference` was invisible from the `default` view — but that's
just organization, not a security wall. The real wall came in Module 4.

---

## Module 3 — RBAC (key cards: who can open what)
**ELI5:** Every tenant gets a key card (a ServiceAccount). RBAC decides which doors that card opens.
Default building policy hands out a MASTER key to everyone — bad! If a burglar steals it, they
open everything.

**The fix (least privilege):** Give each tenant a key card that opens ONLY their own door,
and nothing valuable.
- Made a dedicated card: `llm-inference-sa`.
- Turned OFF auto-handing-out the card: `automountServiceAccountToken: false` (no card left lying
  around for a burglar to grab).
- The card can read one harmless thing (configmaps), but NOT the safe (secrets), and NOT other
  apartments.

**Why it matters:** When an app gets hacked, the FIRST thing a burglar grabs is the key card
sitting in the room. RBAC decides if that card opens a closet or the whole building.

**You proved it:** `kubectl auth can-i` → `yes` (configmaps), `no` (secrets), `no` (other namespace).

---

## Module 4 — Network Policies (door locks / who can talk to whom)
**ELI5:** By default the building has NO door locks — anyone can knock on anyone's door and be let
in. That's the "flat network." A burglar in `monitoring` can walk right up to your valuable
`llm-inference` app.

**The fix (default-deny):** Lock ALL doors first. Then add a guest list: "only visitors wearing a
`llm-client` badge may knock on the llm-api door, and only at door 8080." Everyone else: denied.

**Why it matters:** This stops "lateral movement" — a burglar hopping from one hacked app to the
next. This is what finally makes namespaces a REAL wall.

**You proved it (the best demo):**
- Before the lock: attacker reached the app → `200` (success).
- After the lock: attacker → `000` (timeout, blocked).
- Good client with the badge → `200` (still works).

---

## Module 5 — Image Security (checking the furniture for bugs)
**ELI5:** Every app is built from a "starter kit" (a base image) — like pre-furnished furniture.
Old, bulky furniture is full of bugs (vulnerabilities/CVEs). You can have the safest apartment,
but if the couch is infested, you have a problem.

**The fix:** SCAN the furniture before moving it in (Trivy), and pick SMALL, NEW furniture
(minimal, current base images) instead of big old stuff.

**Why it matters:** Old `python:3.9` = 469 pieces of furniture, 1,519 serious bugs.
New `python:3.13-slim` = 87 pieces, 20 bugs. Same app, ~98% fewer bugs, from ONE good choice.

**Bonus:** You put the scanner at the building entrance (GitHub Actions CI/CD) so buggy furniture
gets REJECTED automatically before it's ever delivered.

---

## Module 6 — Admission Control (the front-desk guard)
**ELI5:** A guard at the front desk checks EVERYONE trying to move in. If they don't follow the
rules (not hardened, no resource limits), the guard turns them away at the door. They never even
get inside.

**Two guards working together:**
- **PSA (built-in guard):** "Are you hardened? (non-root, dropped keys, etc.) No? Rejected."
  (This is the guard that kept blocking your quick test Pods!)
- **Kyverno (custom-rules guard):** enforces YOUR extra rules PSA can't, like "every tenant must
  promise not to hog all the power and water" (resource limits — stops one app starving the others).

**Why it matters:** Before this, being secure was VOLUNTARY (you had to remember to do it right).
Now it's GUARANTEED — the building physically won't accept an unsafe tenant. That's the big jump
from "we try to be secure" to "we CAN'T be insecure."

**You proved it:** A perfectly-hardened Pod with NO resource limits was auto-rejected by Kyverno.
A compliant one was accepted.

---

## Module 7 — Runtime & Secrets (the safe that isn't locked)
**ELI5:** Kubernetes "Secrets" SOUND locked, but by default they're just written in a notebook with
the words spelled backwards (base64). Anyone who opens the notebook can read them in one step.
It's ENCODING (scrambling), not ENCRYPTION (locking).

**The fixes:**
1. Lock the notebook drawer (RBAC — only some cards open it). You already did this in M3.
2. Actually encrypt the notebook (encryption at rest).
3. BEST: don't keep secrets in the building at all — keep them in a real bank vault
   (AWS Secrets Manager) and have a trusted courier (External Secrets Operator) fetch them
   only when needed. This is YOUR AWS strength.

**Runtime security bonus (Falco):** admission control stops bad tenants at the door. Runtime
security watches tenants who are ALREADY inside for suspicious behavior (suddenly picking a lock,
calling a stranger). Prevention at the door + detection inside.

**You proved it:** `kubectl get secret ... | base64 -d` printed your password in plain text. Yikes.

---

## Module 8 — Capstone (everything at once)
**ELI5:** You moved a real tenant (an inference app) into the building, and it had to pass EVERY
guard and lock at the same time: hardened, right apartment, proper key card, behind the door lock,
scanned furniture, resource-limited. The fact that it moved in successfully PROVES all the security
is working together — because if it broke even one rule, the guard would have rejected it.

You also upgraded from a single tenant (Pod) to a proper household (Deployment) that keeps 2 copies
running and heals itself if one dies, with a stable address (Service).

---

## The 6 walls, shortest version
1. **Pod hardening** — the tenant has no super-powers.
2. **Namespace** — separate apartments.
3. **RBAC** — key cards open only what's needed.
4. **Network policy** — doors locked, guest-list only.
5. **Image scanning** — furniture checked for bugs.
6. **Admission control** — guard rejects rule-breakers at the door.

**The one sentence to remember:** *A single hacked app should never mean a hacked cluster —
because every layer contains the damage from the one before it.*

---

## The 3 facts interviewers love (memorize these)
1. **Root in a container = one breakout from root on the node** (containers share the host kernel).
2. **A namespace is NOT a security boundary by itself** — the network is flat by default; it becomes
   a boundary only with Network Policies + RBAC.
3. **Kubernetes Secrets are base64-ENCODED, not encrypted** — use encryption at rest or an external
   secrets manager.
