---
path: '/blog/git-gives-you-superpowers'
date: '2020-09-20'
title: 'Git Gives You Superpowers'
---

Imagine having a time machine that lets you not only travel back and forth through time, but across different realities in the multiverse. And the best part is that this machine lets you merge the best parts of those alternate realities into your main timeline. This is what git lets you do (for code, at least). Then again, git is insanely powerful, so the multiverse feature is probably in there somewhere, too.

## What is Git?

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. 

Okay, but what does that mean? In short, it's a way of taking snapshots of your files as you work on them, while still allowing you to share all or some of those changes 

### Version-Control Systems
A Version-Control System (VCS) is a tool that allows you to track changes to files, particularly source code. If you are writing code without a VCS, you are missing out on an insanely useful safety net. A VCS gives you the freedom to experiment with changes to your code without the risk of not being able to recover a useable state.

### Distributed VCS
What does it mean that Git is distributed? It means that there is no mandated central repository. Other systems have a central server that require you to check files out in order to edit them. 

With Git, on the other hand, every repository is completely self-sufficient and can stand alone on a user's filesystem. This makes it possible two (or more) developers to be editing the same file at the same time.

"Madness!" you say, "Won't that cause all sorts of problems if there is no single Source of Truth??" It's possible

