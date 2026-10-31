---
title: "Configurability Is a Platform Decision, Not a Feature"
description: "Why supporting different ways of working starts with architecture, not settings."
pubDate: 2026-10-31
tags: ["platforms", "architecture", "product", "software"]
pinned: false
draft: true
---

## TL;DR

SaaS platforms have to work for customers who are organized differently, approve things differently, and follow different rules. Configurability is how one product serves all of them without becoming a custom build for each. But it's hard to bolt on later. It comes from early decisions about data models, roles, permissions, and workflows. The point isn't unlimited flexibility. It's deciding what should be the same for everyone and where customers really do need to work differently.

## Where this starts

In [Whose Organizational Debt Are We Building Into Our Products?](/reflections/whose-organizational-debt-are-we-building-into-our-products/) and [When Customer Discovery Becomes a Design Constraint](/reflections/when-customer-discovery-becomes-a-design-constraint/), I wrote about how a product can end up shaped around the way its first customers happen to work. This post is about what to do about it on the architecture side.

When the second or third customer shows up and works differently, there are really three options. Change the software for each customer. Ask the customer to work the way the product already does. Or build the platform so it can handle the difference.

The third option is configurability. The catch is that it's much easier to design in early than to add once the first customer's assumptions are built into the foundation.

## Configuration isn't customization

People use these words interchangeably, but they mean very different things for a SaaS business.

Configuration is a customer adapting the product using things the platform already supports. Customization is the development team changing or extending the software because the platform can't do what the customer needs.

Take an approval workflow. With configuration, a customer sets up their own approval stages, decides who is responsible for each one, and sets the rules for when something can move forward. With customization, someone on the development team writes customer-specific logic to make it work.

Both can be the right call. But configuration lets many customers share one platform and still work differently. Customization adds code paths, testing, and maintenance with every customer. Do enough of it and you don't really have a SaaS platform anymore. You have a set of custom software projects that happen to share a login page.

## It starts in the data model

It's tempting to think of configurability as an admin screen full of settings, checkboxes, and dropdowns. Those are the visible part. Whether they can actually do anything depends on how the underlying business concepts are modeled.

Organizational hierarchy is a good example. Say the first customer is structured as company, division, department, and office. We build that into the data model, and reporting, permissions, and workflows all assume it.

Then the next customer is organized by region. One office belongs to several projects at once, and responsibility is shared across teams. No setting fixes that. We have to rethink the relationships in the data model, the permission logic, the reports, and the workflows.

The real issue is that we treated one customer's org chart as part of the domain. **Every assumption we hardcode into the architecture is a decision about which customers the platform can easily serve.**

## Standardize capabilities, configure workflows

The approach I find most useful is to separate the core capabilities from the workflows built on top of them.

Reviewing information, validating results, assigning responsibility, and recording decisions show up almost everywhere. What varies is how each organization strings them together. One wants two levels of review. Another validates automatically and only looks at exceptions. Another routes work to different people depending on what kind of work it is.

If the capabilities stay consistent, the workflows can vary without a separate implementation for each customer.

**Standardize the capabilities. Configure the workflows. Preserve the outcomes.**

That doesn't mean supporting every possible workflow. A system that tries to handle everything usually ends up hard to use and harder to maintain. The work is figuring out which differences actually matter, which is where discovery comes in, and designing around those.

## Flexibility has a cost too

It's possible to overdo this. A platform with hundreds of settings and layers of conditional rules is hard to implement, hard to support, and hard to test. Customers get lost in the options, and the product team ends up spending its time on unusual configurations instead of the core experience.

So not everything should be configurable. I tend to sort things into three buckets:

- **Standard**, because it's a real requirement of the domain or a proven approach that helps everyone.
- **Configurable**, because customers have legitimate reasons to work differently.
- **Out of scope**, because it's so specific to one customer that it doesn't belong in the core platform.

Drawing those lines is one of the most important calls product and architecture make together. **Good configurability isn't about offering the most options. It's about making the right differences easy to support.**

## Designing for customers we haven't met yet

We can't predict every future requirement, and trying to usually leads to overengineering. But we can spot the places where assumptions are likely to vary. Org structure, roles, approvals, business rules, and reporting are the usual suspects.

In those areas, sometimes it makes sense to build the configurable version early. Other times it's better to keep things simple but avoid decisions that would be hard to undo. Either can be the right choice. The mistake is not noticing you're making one, and ending up with the first customer's way of working as a permanent part of the platform.

## Finding the balance

Too much standardization forces customers into workflows that don't fit them. Too much configurability buries the benefits of a shared platform under complexity. Getting it right means understanding the underlying problem, talking to customers who work differently, and being deliberate about what's essential to the domain versus what's one organization's preference.

What we're really after is a platform that can serve different organizations without turning into a different product for each one.

**The goal isn't to design for every possible way of working. It's to avoid assuming that the first way we encounter is the only one worth supporting.**
