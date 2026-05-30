---
title: "LLMOps — Legal QA Platform"
summary: "A production MLOps platform on Google Kubernetes Engine: CI/CD, ELK + Prometheus/Grafana observability, Terraform IaC, LiteLLM routing and Redis semantic caching."
category: "MLOps"
stack: ["GKE", "Terraform", "LiteLLM", "Redis", "Prometheus", "Grafana"]
date: "2024-12-01"
featured: true
---

## The problem

A working LLM demo is not a product. To run legal Q&A in production you need reliability, observability, cost control, and a way to ship changes safely — none of which a notebook gives you.

## What I built

A full **LLMOps platform** that takes a legal-QA system from prototype to production-grade service:

- **Model routing** with LiteLLM — a single interface across providers/models with fallback.
- **Semantic caching** in Redis — repeated and near-duplicate questions are served from cache, cutting latency and cost.
- **Observability** — ELK for logs, Prometheus + Grafana for metrics and dashboards.
- **Infrastructure as code** — the whole stack defined in Terraform and deployed on Google Kubernetes Engine with CI/CD.

## Architecture

- GKE hosts the services; Terraform makes the environment reproducible.
- CI/CD pipelines build, test, and roll out changes.
- LiteLLM + Redis sit in front of the models for routing and caching; the ELK + Prometheus/Grafana stack makes behaviour and cost visible.

## Outcome

A legal-QA service that is observable, cost-aware, reproducible, and safe to iterate on — the difference between a demo and something a team can actually operate.

## What you get

If you have an LLM prototype that needs to become a real service, I can build the deployment, routing, caching, observability, and IaC around it.
