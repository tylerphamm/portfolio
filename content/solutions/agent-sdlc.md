---
title: "Agent SDLC — Multi-Agent Software Lifecycle"
summary: "A multi-agent system where each agent owns a software-lifecycle role — Business Analyst, Designer, Developer, Tester — orchestrated on the GoClaw agentic framework."
category: "LLM Agents"
stack: ["Multi-agent", "GoClaw", "LangGraph", "LLMs"]
date: "2025-02-01"
featured: false
---

## The problem

A single "do everything" coding agent quickly loses the plot on real features — it conflates requirements, design, implementation, and testing into one fuzzy prompt and produces brittle results.

## What I built

**Agent SDLC** breaks the software lifecycle into specialised agents that each own one role and hand off to the next:

- **Business Analyst** agent — clarifies and structures requirements.
- **Designer** agent — turns requirements into a concrete plan and interface.
- **Developer** agent — implements against that plan.
- **Tester** agent — verifies the result and feeds issues back.

## Architecture

- Orchestrated on the **GoClaw** agentic framework, with explicit handoffs and shared state between roles.
- Each role has a focused prompt, tools, and success criteria — making the whole pipeline inspectable and improvable role-by-role.

## Outcome

A division-of-labour approach to agentic development that produces more reliable output than a monolithic agent, because each step is scoped, verifiable, and replaceable.

## What you get

If you want to apply multi-agent orchestration to a workflow (not just coding), I can decompose it into roles, define the handoffs, and build the orchestration graph.
