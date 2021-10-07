---
path: '/blog/gnu-find-regex'
date: '2021-10-07'
title: 'Find Files Faster with Regex'
---

The utility [find](https://www.gnu.org/software/findutils/manual/html_mono/find.html), as its name suggests, is a powerful tool for finding files on your system. For the longest time, though, I didn't realize that it had robust regex and case-insensitive search capabilities.

## Basic Usage

You can find all files in a given directory, by running the following command:

```bash
find <directory>
```

You can run the output of that through grep if you want to do additional filtering of the output. However, you can match patterns directly in the `find` command.

## Filtering your Found Files

### By Name

```bash
find <directory> -name '*.txt'
```

### By Regex

```bash
find <directory> -regex '.*\.pdf'
```

### Case Insensitive

There is a version of both the `name` and `regex` flag that runs a case-insensitive search by prefixing the flag with an `i`:

```bash
find <directory> -iname '*.txt' # Finds all txt or TXT files
find <directory> -iregex '.*\.pdf' # Finds all txt or TXT files
```

### Better Regex

```bash
find -E <directory> -iregex '.*\.(pdf|docx)' # Finds all txt or TXT files
```
