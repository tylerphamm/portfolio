---
title: "Real-time Video Analytics"
summary: "NVIDIA DeepStream pipelines for live CCTV over RTSP, with YOLO detection and CLIP-based semantic video search at scale."
category: "Computer Vision"
stack: ["NVIDIA DeepStream", "YOLO", "CLIP", "RTSP", "TensorRT"]
date: "2025-04-01"
featured: true
---

## The problem

A wall of CCTV monitors is only as useful as the human watching it. Teams need live detection on many camera streams at once — and the ability to *search* footage by meaning ("person in red jacket near the entrance") instead of scrubbing hours of video.

## What I built

A real-time analytics system for live camera feeds:

- **Multi-stream ingestion** of CCTV over RTSP through NVIDIA DeepStream.
- **Detection** with YOLO running on-GPU for low-latency object and event detection across many streams.
- **Semantic video search** powered by CLIP embeddings, so footage is searchable by natural-language description.

## Architecture

- DeepStream handles decode → inference → tracking on the GPU, keeping throughput high across concurrent streams.
- Detection models optimised with TensorRT for real-time performance.
- CLIP embeddings indexed for fast semantic retrieval over recorded segments.

## Outcome

Live monitoring that scales to many cameras, plus the ability to find moments in footage by describing them — turning passive recording into a queryable system.

## What you get

If you have camera feeds and need real-time detection or searchable video, I can design the DeepStream pipeline, the detection models, and the semantic search layer.
