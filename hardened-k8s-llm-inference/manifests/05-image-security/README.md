# Module 05 — Image Security (Trivy)

## Problem
A perfectly hardened `securityContext` cannot protect against vulnerabilities
baked into the container image itself. Base image choice is a security decision.

## Evidence — base image comparison (HIGH/CRITICAL, OS packages)

| Image | Packages | HIGH | CRITICAL | Total |
|-------|----------|------|----------|-------|
| `python:3.9` (full, EOL) | 469 | 1308 | 211 | 1519 |
| `python:3.13-slim` (current) | 87 | 18 | 2 | 20 |

**Result: ~98.7% reduction in HIGH/CRITICAL vulnerabilities** by moving from an
end-of-life, full base image to a minimal, current one. Two compounding factors:
fewer packages (smaller attack surface) and a maintained base (patched CVEs).

## Controls
1. **Scan before deploy** — Trivy in CI/CD, failing builds on HIGH/CRITICAL.
2. **Minimal base images** — slim/distroless to shrink attack surface.
3. **Current, supported bases** — avoid EOL images that no longer receive patches.
4. **Defense in depth** — securityContext hardening (read-only FS, dropped caps,
   non-root) reduces exploitability even of unpatched (`fix_deferred`) CVEs.

## Raw scan artifacts
- `nginx-unprivileged-scan.json` — the platform's runtime image
- `python39-scan.txt` — full EOL image (baseline)
- `python313-slim-scan.txt` — minimal current image (recommended)
