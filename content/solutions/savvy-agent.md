---
title: "Savvy Agent — Enterprise Assistant"
summary: "An internal enterprise assistant on LangChain & LangGraph that answers company-policy questions via RAG, generates business reports, and talks directly to timesheet systems."
category: "LLM Agents"
stack: ["LangGraph", "LangChain", "RAG", "Milvus", "FastAPI"]
date: "2025-09-01"
featured: true
---

## The problem

Employees waste hours hunting through scattered policy documents, building the same reports by hand, and switching between internal tools. Knowledge lives in PDFs, wikis, and people's heads — and none of it is one question away.

## What I built

**Savvy Agent** is an internal assistant that gives every employee a single conversational entry point to company knowledge and tooling:

- **Policy Q&A via RAG** — grounded answers with citations to the source document, so people trust the response.
- **Business report generation** — turns natural-language requests into structured reports pulled from internal data.
- **Tool actions** — talks directly to the timesheet system to log, query, and summarise hours.

## Architecture

- **Orchestration** with LangGraph — an explicit state graph routes each request between retrieval, tool-calling, and generation nodes, so behaviour is debuggable instead of a black box.
- **Retrieval** over a Milvus vector store, with chunking and metadata filtering tuned for policy documents.
- **Serving** through a FastAPI backend exposing a streaming chat API.
- **Guardrails** on tool actions so the agent confirms before any state-changing operation.

## Outcome

A single assistant that replaces "ask around and dig through the wiki" with grounded, cited answers — and removes repetitive report and timesheet busywork.

## What you get

If you need an internal copilot that actually plugs into your data and tools (not just a chatbot), I can design the retrieval layer, the agent graph, and the safe tool-calling around your stack.
