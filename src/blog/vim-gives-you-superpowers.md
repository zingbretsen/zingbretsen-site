---
path: '/blog/vim-gives-you-superpowers'
date: '2020-09-18'
title: 'Vim Gives You Superpowers'
---

Vim is the closest thing to telekinesis that I've experienced. Teletypekinesis, if you will. Once you learn how to control it, you will be able to move chunks of text around on a whim, teleport around the page, and Thanos-snap whole chunks of your document out of existence. And what you may not realize is: you don't even have to use vim to benefit from learning it.

Pretty much every editor and IDE has some kind of vim extension that lets you use vim keybindings alongside the tools you're already comfortable with. Vim-like keybindings are even present in some of your favorite webapps. In Gmail, `/`. In Facebook, `j` and `k`.

Some editors have better vim emulation than others, to be sure, but you may be surprised how much of a benefit it can be to incorporate into your normal workflow.

The only problem is that once you start, you may wish that you can have this functionality everywhere.

## What is Vim?
According to vim.org:
> Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient.

Efficiency is core to the vim ethos. It is designed to get you where you want to go quickly, and to do what you want to do with minimal keystrokes.

In order to achieve this, vim was designed as a modal and extensible editor.

### A Modal Text Editor
One aspect of vim that trips people up is that it is a `modal` text editor. Practically, what this means is that pressing the same key on your keyboard will do different things depending on what mode you are in.

#### Insert Mode
The mode you may be most familiar with is called `insert mode`. This is how most other editors work all the time. In this mode, pressing the keys on your keyboard will enter that character into your document. This is obviously necessary to be able to do. You won't get very far if you can't actually enter text into your files.

Importantly, however, *this is not the mode that vim is in when you first open it*! Why is that?

When I am coding, I don't spend most of my time putting characters into the page. Most of my time is spent navigating around the page (or even different files), refactoring sections, moving code around, looking at documentation, etc.

Sure, you can use your arrow keys to move around, or `Page Down`/`Page Up` to jump over larger sections of your document. You can even use your mouse.

But you know what? You can do the same thing in vim. It's just not nearly the fastest way to move around.

#### Normal Mode
`Normal mode` is the mode that vim starts in. Typing letters on your keyboard will not enter those characters into your document. Instead, the keys will do things like:

 - Move the cursor around the page in unexpected ways
 - Delete characters/words/lines from your document
 - Toggle the case of letters
 - Bring you into other modes, such as `insert mode`

There is a lot to say about this mode. It is the one you will likely spend the most time in.

#### Commandline Mode
#### Other modes
