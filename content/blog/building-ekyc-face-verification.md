---
title: "Building an eKYC pipeline that doesn't fall for a printed photo"
summary: "How detection, liveness, and recognition fit together into a face-verification flow — and why the order of those three stages matters more than the models themselves."
date: "2026-05-20"
tags: ["Computer Vision", "eKYC", "Face Recognition"]
readingTime: "5 min read"
---

Most face-verification bugs aren't recognition bugs. They're *ordering* bugs.

A surprising number of "AI identity" systems do the matching first and treat liveness as an afterthought — which means a printed photo or a phone screen sails straight through. The fix is to treat eKYC as a **pipeline with a strict order**, not a single model call.

## The three stages

A solid face-verification flow runs three distinct stages, in this order:

1. **Detection & alignment** — find the face and normalise it. I use **RetinaFace**, which stays robust across angle and lighting.
2. **Liveness / anti-spoofing** — decide whether this is a *live* person before anything else. **MiniFASNet** rejects print, replay, and mask attacks.
3. **Recognition** — only now compute an embedding and match it. **ArcFace** gives a discriminative embedding for the actual identity check.

> The key insight: recognition should never run on a face that failed liveness. If you match first, you've already lost.

## Why order beats model choice

You can swap ArcFace for another backbone and the system still works. But if liveness runs *after* matching — or not at all — no model choice saves you. Putting anti-spoofing as a hard gate before recognition is what makes the system secure.

```text
RTSP / image  ->  RetinaFace (detect+align)
              ->  MiniFASNet (live?)  --no-->  reject
              ->  ArcFace (match)     --no-->  reject
              ->  verified
```

## Shipping it

I wrap the chain behind a single **FastAPI** endpoint that returns a decision plus per-stage confidence, so the caller can see *why* a verification passed or failed. Each stage is independently swappable and monitorable — which matters a lot more in production than squeezing out the last 0.1% of accuracy.

---

*Want a face-verification or eKYC flow built or hardened? [Get in touch](/contact).*
