---
path: '/blog/rsync-include-exclude'
date: '2021-09-27'
title: 'How to Selectively Copy Files with Rsync'
---

The utility `rsync` is fantastic for efficient, incremental backups of files. It can be used to copy files locally or to back files up to a remote machine over SSH.

One aspect of `rsync` that I always struggle with, however, is the syntax for selectively syncing a subset of files. It does not use the normal wildcard expansion that other shell commands use, and it is particularly persnickety about how you order your includes and excludes.

## Full backup

By default, it will copy the entire contents of the `src` directory to the `dest` location:

```bash
rsync -avz src/ dest/
```

This will include all files and subdirectories, including hidden ones like .git/, which you may not want to copy.

## Excluding a subset of files

To exclude files or directories, you use the `--exclude` flag. You can exclude specific files or directories or files/directories that match a particular pattern. This will exclude the .git directory and any file that ends with `yml`:

```bash
rsync -avz --exclude='.git/' --exclude='*.yml' src/ dest/
```

## Including a subset of files

However, to _only_ copy files that match a particular pattern is more complicated. By default, as seen above, `rsync` includes all files and folders by default. In order to only _include_ files of a certain type, we need to _exclude_ all the other files.

_*BUT*_! We need to tell `rsync` that we want to _include_ all directories first. The following command will copy all `*.txt*` files to the destination:

```bash
rsync -avz --include='*/' --include='*.txt' --exclude='*' src/ dest_includes/
```

We need all of those pieces in that order:

1. Include all directories (otherwis)
