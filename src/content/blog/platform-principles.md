---
title: "Platform Principles"
description: "A running list of principles for building platforms, one short post per principle."
pubDate: 2026-10-31
tags: ["platforms", "architecture", "product"]
pinned: false
draft: true
---

A lot of what I've written lately comes back to the same question: what does it actually take to build a platform, as opposed to a product for one customer?

I'm going to work through it one principle at a time, in short posts. This page is the running list. I'll add to it and link each principle as its post goes up.

## The principles

**1. The first customer isn't the market.**
Early customers show us the problem. They don't define the only way to solve it. Separate what they need from how their organization happens to do it.

**2. Model the domain, not the org chart.**
One customer's hierarchy, roles, and handoffs shouldn't become the shape of the data model. Once they do, every customer that's organized differently becomes a special case.

**3. Standardize capabilities, configure workflows.**
Keep the building blocks consistent and let customers combine them in the way that fits how they work. Configuration lets customers share a platform. Customization turns it into a set of separate projects. (Longer version: [Configurability Is a Platform Decision, Not a Feature](/reflections/configurability-is-a-platform-decision/).)

**4. Decide what to leave out.**
Not everything belongs in the core platform. Some things should be standard, some configurable, and some out of scope entirely.

**5. Integrate before you build.**
Before adding a new system, check whether the capability already exists somewhere and whether connecting to it would be enough.

**6. Make the easy path the right path.**
If the simplest way to build something on the platform is also the secure, maintainable way, people will take it without needing a rule.

**7. Every feature is a maintenance commitment.**
Building it is the cheap part. Someone has to support, secure, and eventually retire it.

**8. Platform users are builders too.**
Internal teams and partners building on top of the platform are customers. Their experience matters as much as the end user's.

*More to come.*
