---
path: '/blog/vim-gives-you-superpowers'
date: '2020-09-18'
title: 'Vim Gives You Superpowers'
---

Vim is the closest thing to telekinesis that I've experienced. Teletypekinesis, if you will. Once you learn how to control it, you will be able to move chunks of text around on a whim, teleport around the page, and Thanos-snap whole chunks of your document out of existence. And what you may not realize is: you don't even have to use vim to benefit from learning it.

Pretty much every editor and IDE has some kind of vim extension/plugin that lets you use vim keybindings alongside the tools you're already comfortable with. Vim-like keybindings are even present in some of your favorite webapps, and you may not even have known!

Some editors have better vim emulation than others, to be sure, but you may be surprised how much of a benefit it can be to incorporate into your normal workflow. The only problem is that once you start, you may wish that you can have this functionality everywhere.

## What is Vim?

According to vim.org:

> Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient.

Efficiency is core to the vim ethos. It is designed to get you where you want to go quickly, and to do what you want to do with minimal keystrokes.

In order to achieve this, vim was designed as a modal and extensible editor.

### A Modal Text Editor

One aspect of vim that trips people up is that it is a `modal` text editor. Practically, what this means is that pressing the same key on your keyboard will do different things depending on what mode you are in.

#### "But that's confusing"

But is it, though? Let's not compare vim to other text editors. Instead, let's compare vim to playing a video game on your computer. When you are playing a game, pressing the WASD keys likely won't type those letters into the in-game world. They probably move you around that world.

Obviously, the main things you do in a video game are not typing characters into the game. There may be a way to send messages to teammates, in which case you probably press a key to pop up the chat panel, where you can type and send your message. Video games are modal!

Depending on what mode you're, in pressing a key on your keyboard will do different things. Pressing `w` in the `normal` mode of your game will move you forward. Pressing `w` in the chat will `insert` a literal "w" into the chat box. This is exactly the same in vim! Pressing `w` in `normal` mode will move you forward one `w`ord, and pressing `w` in `insert` mode will enter a literal "w"!

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

#### Visual Mode

This is very simliar to normal mode, but it's all about selecting text. It will `visual`ly highlight the text that you have selected. The keybindings are all about changing what text you have selected or operating on the selection (e.g., `d`eleting that text, `c`hanging it, or `y`anking/`p`asting it).

You can press `v` to enter `v`isual mode or `V` to enter `V`isual line mode, where it will always select whole lines of text.

#### Command-line Mode

Some video games also have a mode where you can enter commands into the game. For example, pressing `~` may open a console where you can type commands in, e.g., `noclip` to turn off collision detection, allowing you to walk through walls.

Vim has `command-line` mode, which lets you enter commands that will alter how vim behaves or run commands on text.

#### Other modes
