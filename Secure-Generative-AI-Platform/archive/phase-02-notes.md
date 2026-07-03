# Phase 02 - Static Website Hosting with Amazon S3 and CloudFront

## Objective

Deploy a secure static frontend using Amazon S3 and Amazon CloudFront while keeping the S3 bucket private.

---

## AWS Services Used

- Amazon S3
- Amazon CloudFront
- Origin Access Control (OAC)

---

## Architecture

User
↓
CloudFront
↓
Private S3 Bucket

---

## Security Decisions

- Kept S3 bucket private.
- Used Origin Access Control (OAC) instead of making the bucket public.
- Enabled HTTPS through CloudFront.
- Enabled S3 bucket versioning.
- Enabled server-side encryption (SSE-S3).

---

# Challenges Encountered

### Challenge 1

**Problem**

CloudFront URL returned:

DNS_PROBE_FINISHED_NXDOMAIN

**Root Cause**

The CloudFront distribution was still deploying globally. DNS propagation had not completed.

**Resolution**

Waited for the distribution status to change from **Deploying** to **Deployed**.

**Lesson Learned**

CloudFront distributions require global propagation before the generated domain becomes reachable.

---

### Challenge 2

**Problem**

CloudFront returned:

AccessDenied

**Investigation**

Verified:

- CloudFront deployment status
- Bucket policy
- Origin configuration
- Object locations
- OAC configuration

**Root Cause**

CloudFront configuration had not fully propagated. After deployment completed and configuration was verified, access succeeded.

**Resolution**

Confirmed:
- Private bucket access enabled
- OAC configured
- Correct bucket policy
- index.html uploaded to the root of the bucket

**Lesson Learned**

An AccessDenied error is not always caused by an incorrect bucket policy. A systematic verification of origin settings, bucket permissions, and object locations helps isolate the issue efficiently.

---

## Interview Talking Points

- Why CloudFront instead of S3 Static Website Hosting?
- Why keep the S3 bucket private?
- What is Origin Access Control (OAC)?
- Why does CloudFront deployment take several minutes?