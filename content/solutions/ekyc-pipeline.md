---
title: "eKYC Face-Verification Pipeline"
summary: "End-to-end face verification pairing RetinaFace detection, MiniFASNet liveness / anti-spoofing, and ArcFace recognition for high-security authentication."
category: "Computer Vision"
stack: ["RetinaFace", "ArcFace", "MiniFASNet", "Anti-spoof", "FastAPI"]
date: "2025-06-01"
featured: true
---

## The problem

Remote onboarding and authentication need to prove two things at once: *this is a real, live person* and *this is the right person*. A naive face-match is trivially defeated by a printed photo or a phone screen.

## What I built

A complete **eKYC** pipeline that runs the full verification chain in one request:

1. **Detection** — RetinaFace locates and aligns the face, even at awkward angles and lighting.
2. **Liveness / anti-spoofing** — MiniFASNet rejects print, screen-replay, and mask attacks before any matching happens.
3. **Recognition** — ArcFace produces a discriminative embedding and matches it against the reference identity.

## Architecture

- Models exported and optimised for low-latency inference.
- A **FastAPI** service wraps the chain behind a clean verification endpoint that returns a decision plus per-stage confidence.
- Designed so each stage is independently swappable and monitorable.

## Outcome

A security-first verification flow where spoofing is caught early and recognition only runs on confirmed-live faces — suitable for onboarding, access control, and high-assurance login.

## What you get

I can build or harden a face-verification / eKYC flow for your product, including liveness, the recognition backbone, and a deployable inference service.
