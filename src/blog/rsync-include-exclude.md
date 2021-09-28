---
path: '/blog/rsync-include-exclude'
date: '2021-09-27'
title: 'How to Selectively Copy Files with Rsync'
---

The utility `rsync` is fantastic for efficient, incremental backups of files. It can be used to copy files locally or to back files up to a remote machine over SSH.

One aspect of `rsync` that I always struggle with, however, is the syntax for selectively syncing a subset of files. It does not use the normal wildcard expansion that other shell commands use, and it is particularly persnickety about how you order your includes and excludes.

By default, it will copy the entire contents of the `src` directory to the `dest` location:

```
rsync -avz src/ dest/
```

This will include all files and subdirectories, including hidden ones like .git/, which you may not want to copy.


To exclude files or directories, you use the `--exclude` flag. You can exclude specific files or directories:

```
rsync -avz --exclude='.git/' src/ dest/
```

Or you can exclude files or directories with wildcard patterns:

```
# This will exclude anything that starts with 'git'
#e.g., .git/ and .gitignore in all subdirectories
rsync -avz --exclude='.git*' src/ dest/
```
