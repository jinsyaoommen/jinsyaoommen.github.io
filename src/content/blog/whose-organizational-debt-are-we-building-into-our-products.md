---
title: "Whose Organizational Debt Are We Building Into Our Products?"
description: "How Conway's Law shows up when we build technology for others."
pubDate: 2026-10-31
tags: ["product", "architecture", "software", "systems-thinking", "leadership"]
pinned: false
---

## TL;DR

When building SaaS products, we can unintentionally embed our own organizational processes or those of our earliest customers into the software. Some of these reflect genuine domain expertise, while others are simply the result of organizational history, constraints, and workarounds.

Conway's Law helps explain how organizational structures shape technology design. The challenge is distinguishing between the underlying problem we're solving and the particular way an organization happens to solve it. Otherwise, we risk building one organization's operating model into a product intended for an entire market.

## When organizational debt becomes product debt

In my [previous article](/reflections/organizational-debt), I explored organizational debt: the accumulation of processes, structures, and decisions that may have served a purpose at one time but create complexity as organizations evolve.

But what happens when organizations carrying that debt start building technology, particularly SaaS platforms intended for external customers?

**We can unintentionally build our own organizational debt, or that of our earliest customers, directly into the products we create.**

Conway's Law suggests that systems tend to reflect the communication structures of the organizations designing them. While typically discussed in the context of software architecture and engineering teams, I think there's a related phenomenon in product development.

Our software often reflects how we understand work to be done, and that understanding is shaped by the organizations we've worked in and the customers we've learned from.

## When our processes become product requirements

Consider an organization that decides to turn years of hands-on expertise into a SaaS platform.

Over that time, it has developed processes for managing projects, reviewing work, assigning responsibilities, and reporting results.

Naturally, those workflows become the starting point for the software.

But some processes represent genuine industry best practices, while others exist because of historical staffing models, internal handoffs, contractual requirements, or legacy systems.

When we don't distinguish between the two, we can turn our organizational habits into product requirements.

The same thing can happen when we conduct customer discovery.

We work closely with a small number of customers, observe how they operate, and design software around their workflows.

That's good product development practice. But every customer has its own organizational history and accumulated processes.

**Understanding how a customer works today isn't the same as understanding how every customer needs to work.**

When discovery is concentrated among a few organizations, we risk mistaking their operating models for universal requirements.

## The moment it becomes obvious

It often becomes obvious when we demo our product to a prospective customer who operates differently from our early customers.

We're walking through the software, explaining how a user completes a task.

Then we reach a step requiring a particular organizational role, approval, or sequence of actions.

The customer asks, "Why?"

And as we explain, we realize the answer isn't particularly compelling.

That step exists because of how an early customer happened to operate, not because the underlying problem requires it.

**We're explaining another organization's process instead of demonstrating how our product solves a problem.**

And if those assumptions are deeply embedded in the product's architecture, accommodating different ways of working can be expensive.

## Designing for different ways of working

Workflows and processes are important. They help organizations coordinate responsibilities, decisions, and actions.

And organizations have legitimate reasons for operating differently.

That's why configurability matters when building SaaS platforms.

The goal isn't to eliminate workflows or create unlimited flexibility. It's to recognize which capabilities should remain consistent and which aspects of a workflow need to vary across customers.

An approval process, for example, may serve the same purpose across organizations while differing in the number of reviewers, authorization rules, or automation involved.

A platform should ideally support these variations without requiring a separate implementation for each customer.

But meaningful configurability requires us to think about those differences early, particularly when designing data models, permissions, roles, and workflows.

Once we hardcode an organizational assumption into the foundation of a product, changing it becomes much more difficult.

## Separating expertise from process

Deep domain expertise is one of the greatest advantages an organization can bring to software development.

But we need to distinguish between the expertise we've developed and the organizational machinery through which we've historically delivered it.

The same applies to the customers who help shape our products.

We should learn from their workflows without assuming those workflows represent the entire market.

Conway's Law reminds us that organizational structures influence the systems we build. When those systems become SaaS products, the consequences can extend well beyond the organizations that inspired them.

**The goal isn't to reproduce how we or our earliest customers work today. It's to build a platform that captures the underlying expertise while supporting the different ways customers need to work.**

Otherwise, we risk asking new customers to inherit organizational debt they never created.
