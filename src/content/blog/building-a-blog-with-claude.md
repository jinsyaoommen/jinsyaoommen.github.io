---
title: "Building a Blog in a Day with Claude Code"
description: "How I consolidated years of scattered writing into a personal website with the help of an AI coding assistant."
pubDate: 2026-01-10
tags: ["ai", "productivity", "writing"]
---

For years, my writing has lived in scattered places: a few posts on Dev.to, drafts in Google Docs, notes in Notion, and ideas that never made it past a sticky note. I always wanted a simple personal site to bring it all together, but building and maintaining a website felt like one more thing on an already full plate.

Today, I finally did it, and the whole thing took less than a day.

## The Catalyst

I had been curious about Claude Code, Anthropic's AI coding assistant. On a whim, I asked it to help me scaffold a personal blog. What started as a quick experiment turned into a fully deployed website with:

- A clean, minimal design inspired by a Squarespace template I liked
- A blog with posts grouped by year
- An About page with my bio and speaking links
- A "Favorites" page for quotes and recommendations
- Automatic deployment to GitHub Pages

## The Numbers

Here's what it actually took:

- **34 commits** over the course of a day
- **~2 hours of active work** spread across the day (9:35 AM to 6:41 PM), with breaks for meetings, lunch, and other things in between
- **1 conversation** with Claude Code that I could resume at any point
- **$0 hosting cost** using GitHub Pages

I don't have exact token counts, but this was a long, iterative conversation. My rough estimate is somewhere between 100,000-200,000 tokens for the full session. At current Claude pricing, that's probably $3-6 worth of AI assistance to build and deploy an entire website.

## What Surprised Me

**The iteration speed was remarkable.** I could say "make the hero text smaller" or "use this image as my favicon" and see the change in seconds. When something didn't look right, I just said so, and we fixed it together.

**Context persistence mattered.** I left for hours at a time, came back, and Claude remembered everything: the file structure, the design decisions, the GitHub setup. I didn't have to re-explain anything.

**It handled the boring parts.** Setting up GitHub Actions for deployment, fixing package-lock.json issues, configuring the right base paths for GitHub Pages. All the tedious infrastructure work that usually derails side projects.

**I stayed in control.** Claude made suggestions, but I chose the colors, wrote the copy, and decided what felt right. It was collaborative, not autopilot.

## What I Actually Built

The site runs on Astro with React components, styled with plain CSS. It's fast, simple, and easy to maintain. When I want to add a new blog post, I just create a markdown file with some frontmatter.

I'm still migrating old articles from Dev.to and other places, but now my writing finally has a home.

## The Takeaway

This isn't about AI replacing developers. I've been writing code for over two decades. What Claude did was remove the friction that kept me from starting. The setup, the config files, the deployment pipeline, the CSS tweaks. All the small annoyances that make side projects feel heavy.

Sometimes the best tool is the one that helps you finally ship the thing you've been putting off.

The site is live at [jinsyaoommen.github.io](https://jinsyaoommen.github.io). The code is public. And for the first time in years, my writing has a home.
