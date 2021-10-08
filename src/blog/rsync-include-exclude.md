---
path: '/blog/rsync-include-exclude'
date: '2021-10-03'
title: 'How to Selectively Copy Files with Rsync'
tags: ['linux', 'utils']
---

The utility [`rsync`](https://rsync.samba.org/) is fantastic for efficient, incremental backups of files. It can be used to copy files locally or to back files up to a remote machine over SSH.

One aspect of `rsync` that I always struggle with, however, is the syntax for selectively syncing a subset of files. It does not use the normal wildcard expansion that other shell commands use, and it is particularly persnickety about how you order your includes and excludes.

## Full backup

By default, it will copy the entire contents of the `src` directory to the `dest` location:

```bash
rsync -avz src/ dest/
```

This will include all files and subdirectories, including hidden ones like `.git/`, which you may not want to copy.

## Excluding a subset of files

To exclude files or directories, you use the `--exclude` flag. You can exclude specific files or directories or files/directories that match a particular pattern. This will exclude the `.git` directory and any file that ends with `yml`:

```bash
rsync -avz --exclude='.git/' --exclude='*.yml' src/ dest/
```

## Including a subset of files

However, to _only_ copy files that match a particular pattern is more complicated. As seen above, `rsync` includes all files and folders by default. In order to only _include_ files of a certain type, we need to _exclude_ all the other files _*but not all directories*_.

We need to tell `rsync` explicitly that we want to _include_ all directories because excluding `*` would exclude directories as well as files. The following command will copy all `*.txt` files to the destination as desired:

```bash
rsync -avz --include='*/' --include='*.txt' --exclude='*' src/ dest/
```

We need all of those pieces, with the includes first and the exclude second:

1. Include all directories
2. Include all `*.txt` files
3. Exclude everything else

## Things that seem like they should work, but don't

The first thing you might try is to just include the `*.txt` files, but this will copy all files because `rsync` includes all files by default:

```bash
rsync -avz --include='*.txt' --exclude='*' src/ dest/
```

If you the exclude all other files but don't include all directories (as in the following example), you will only copy the `*.txt` files that are in the root of your `src` directory, but not in any subdirectories. This is because excluding `*` excludes all files and directories.

```bash
rsync -avz --include='*.txt' --exclude='*' src/ dest/
```

And if you have all the proper includes put the exclude first, you will not copy any files because the order matters. Here, you are excluding all files and directories right off the bat, and no later includes will change that:

```bash
rsync -avz --exclude='*' --inclue='*/' --include='*.txt' src/ dest/
```
