---
path: '/blog/git-gives-you-superpowers'
date: '2020-09-20'
title: 'Git Gives You Superpowers'
---

Imagine having a time machine that lets you not only travel back and forth through time, but across different parallel universes. And the best part is that this machine lets you merge the best parts of those alternate realities into your main timeline. This is what git lets you do (for code, at least).

<span class="hoverable" title="git revert 2020">Then again, git is incredibly powerful, so the multiverse feature is probably in there somewhere, too...</span>

## What is Git?

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. 

### Version Control Systems
Okay, but what does that mean? In short, a <b>Version-Control System (VCS)</b> is a tool that allows you to take snapshots of your files as you work on them. If you are writing code (or anything, really) without a VCS, you are missing out on an insanely useful safety net. A VCS gives you the freedom to experiment with changes to your code without the risk of not being able to recover a useable state. You can always roll back to previous versions of your files!

Git takes this even further, and allows you to keep different branches of your code. This is where the multiverse metaphor comes in. You can start from one main version of your code and create different branches for experimentation without affecting your main branch. Once you deem an experiment to be successful you can merge those changes in to your main branch.

### Distributed
What does it mean that git is <b>distributed</b>? It means that there is no mandated central repository. Every repository is completely self-sufficient and can stand alone on a user's filesystem. <span class="hoverable" title="There is a hidden directory inside each repository called `.git` that stores all the repository's metadata. If you delete this directory, you will erase all of your git history. Don't delete this directory or edit its contents unless you know what you're doing!">A git repository is just a regular folder on your filesystem.*</span>

You can use git completely effectively on your own computer, without ever syncing your changes with some other server (e.g., GitHub or GitLab). Other VCS tools have a central server that requires you to check files out in order to edit them. This prevents people from making changes to the same file at the same time, thus avoiding potential conflicts.

Git takes a different approach. Because it is distributed, it is possible for two (or more) developers to be editing the same file at the same time because the files live on each developer's system.

"Madness!" you say, "Won't that cause all sorts of problems??" 

For the most part, no. Git is smart about automatically merging changes. <span class="hoverable" title="Git cannot automatically merge changes if two people have edited the same lines. No automated system could. If two people have changed the same line, someone is going to decide if you keep Person A's change, Person B's change, or both.">Even if multiple people have changed the same file, git will usually know how to merge those changes together.</span>

## Why is Git Amazing?


