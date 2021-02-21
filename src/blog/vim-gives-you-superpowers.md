---
path: '/blog/vim-gives-you-superpowers'
date: '2021-02-21
title: 'Vim Gives You Superpowers'
---

Vim is the closest thing to telekinesis that I've experienced. Teletypekinesis, if you will. Once you learn how to control it, you will be able to move chunks of text around on a whim, teleport around the page, and Thanos-snap whole chunks of your document out of existence. And what you may not realize is: you don't even have to use vim to benefit from learning it.

Pretty much every editor and IDE has some kind of vim extension/plugin that lets you use vim keybindings alongside the tools you're already comfortable with. Vim-like keybindings are even present in some of your favorite webapps, and you may not even have known!

Some editors have better vim emulation than others, to be sure, but you may be surprised how much of a benefit it can be to incorporate into your normal workflow. The only problem is that once you start, you may wish that you can have this functionality everywhere.

I hope this post will inspire you to want to learn more about vim, but it is *not* intended to be a getting started guide. To actually start learning vim, install it on your system (if it's not already pre-installed), and then run `vimtutor` from your terminal. This will walk you through the commands you need to start using vim.

## What is Vim?

According to vim.org:

> Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient.

Efficiency is core to the vim ethos. It is designed to get you where you want to go quickly, and to do what you want to do with minimal keystrokes.

In order to achieve this, vim was designed as a modal and extensible editor.

### A Modal Text Editor

One aspect of vim that trips people up is that it is a `modal` text editor. In other words, there are various "modes" with specific behaviors. Practically, what this means is that pressing a given key on your keyboard will do different things depending on what mode you are in.

#### "But that's confusing"

But is it, though? Let's not compare vim to other text editors for now. Instead, let's compare vim to playing a video game on your computer. When you are playing a game, pressing the WASD keys likely won't type those letters into the in-game world. They probably move you around that world.

Obviously, the main things you do in a video game are generally not typing characters into the game, so keystrokes are bound to other kinds of actions when you load the game. There may be a way to send messages to teammates, however. In that case you probably press a key to pop up the chat panel, where you can type and send your message.

Video games are modal!

Depending on what mode you're, in pressing a key on your keyboard will do different things. Pressing `w` in the `normal` mode of your game will move you forward. Pressing `w` in the chat will `insert` a literal "w" into the chat box.

This is exactly the same in vim! Pressing `w` in `normal` mode will move you forward one `w`ord, and pressing `w` in `insert` mode will enter a literal "w"!

#### The Takeaway

In vim, keys are bound to different actions depending on what mode you're in. *Normal mode* is the mode that vim starts in, and it's all about moving around your file and manipulating text. *Insert mode* is the mode that will allow you to type characters into your document. If you are not actively typing code/words, you will likely want to be in normal mode because it will allow you to move around your file(s) and refactor easily. It's like having every key on your keyboard be a hotkey for some kind of action.

### Mnemonics
You may be thinking "that sounds like a lot of work to memorize all those keybindings". Well, yes and no. There are a lot of things you can do in vim. A lot a lot. But one of the key things about vim is that they took great pains to make the keybindings follow a logical pattern. If you say the thing you want to do in your head, that will go a long way to helping you memorize the keybindings until they become muscle memory.

 There keys that you might use to *do* something:

 - `d` is to `d`elete some specified text
 - `c` is to `c`hange some speficied text (it will delete the text and bring you into insert mode to type the new text)
 - `y` is to `y`ank (copy) text
 - `p` is to `p`ut (paste) text
 - `u` is to `u`ndo

There are some keys that you might use to move around the page:

 - `w` is to go forward by one `w`ord
 - `b` is to go `b`ackward by one word
 - `)` is to jump to the next sentence (okay, they can't all be mnemonic winners)
 - `(` is to jump to the previous sentence
 - `}` is to jump to the next paragraph/whitespace break
 - `{` is to jump to the previous paragraph/whitespace break

Other keys put you into a specific mode:

 - `i` to enter `i`nsert mode
 - `v` to enter `v`isual mode

### Composability

The real power of vim's keybindings is that they *combine* with each other in predictable but powerful ways. If you know what the keys mean separately, you can guess what they will do when combined together. Once you learn a basic set of *actions* and *motions*, you can start to combine them in really useful ways. 

#### Combining Actions and Motions

If you press `d` to `d`elete something, you have to tell vim *what* you want to delete.

As previously mentioned, `w` will move you between words (much faster than moving 1 character at a time, although there are other keys that will move you by whole sentences, paragraphs, or more). If you press `dw`, vim will `d`elete from your current position to the next `w`ord. `db` will delete from your current position backwards to the previous word. `d}` will `d`elete to the next paragraph/whitespace break.

*YOU DO NOT HAVE TO MEMORIZE THESE SPECIFIC COMMANDS!* In fact, they are not standalone commands. They are combinations of actions and motions. You can mix and match actions and motions in powerful ways.

If you remember what `d` means, and what `w`, `b`, and `}`, you can figure out `dw`, `db`, and `d}` will do! And then, you should be able to figure out what `cw`, `cb`, and `c}` will do!

Once you get comfortable with these, there are a ton of motions and text objects that you can operate on. For example you may want to `ci)`, or "change everything inside the parentheses". Or you may want to `dap`, or "delete around the paragraph" to delete the whole block of text (including the surrounding whitespace). You could then `Gp` to "`G`o to the bottom of the page and `p`aste your text".

#### Other Common Patterns
There are other useful conventions that many commands follow. Often times, pressing an action key twice will do that action on a whole line. `dd` will delete a whole line, regardless of where your cursor is. `yy` will yank a whole line. `cc` will change a whole line, etc.

Pressing a capital action key will often do that action, but *bigger*, in some way. `D` will `D`elete from your current position to the end of the line. I will leave it as an exercise to the reader to figure out what `Y` and `C` will do.

Motions work similarly. `w` goes forward by one `w`ord (i.e., consecutive alphanumeric characters), and `W` will go forward one big `W`ord which includes all non-whitespace characters.


### Extensible

Vim is truly a tinkerer's editor. There are tons of plugins for vim, and plenty of built-in options to configure. The positive side of this is that you can tweak your editor to be exactly what you want. The flipside is that it really does require some degree of configuration out of the box. Vim plugins add all sorts of functionality, including adding extra actions, commands, or text objects for you to use and combine with the built-ins in ever-increasingly useful ways.

#### A Few Brief Notes on Common Vim Modes

##### Insert Mode

There are several modes in vim. The mode you may be most familiar with is called `insert mode`. This is how most other editors work all the time. In this mode, pressing the keys on your keyboard will enter that character into your document. This is obviously necessary to be able to do. You won't get very far if you can't actually enter text into your files.

Importantly, however, *this is not the mode that vim is in when you first open it*! Why is that?

When I am coding, I don't spend most of my time putting characters into the page. Most of my time is spent navigating around the page (or even different files), refactoring sections, moving code around, looking at documentation, etc.

Sure, in your normal editor you can use your arrow keys to move around, or `Page Down`/`Page Up` to jump over larger sections of your document. You can even use your mouse.

But you know what? You can do the same thing in vim. It's just not nearly the fastest way to move around.

##### Normal Mode

`Normal mode` is the mode that vim starts in. Typing letters on your keyboard will not enter those characters into your document. Instead, the keys will do strange things like:

 - Move the cursor around the page in unexpected ways
 - Delete characters/words/lines from your document
 - Open a command console
 - Bring you into other modes, such as `insert mode`

There is a lot to say about this mode. It is the one you will likely spend the most time in, and there will be a whole other blog post devoted just to normal mode.

##### Visual Mode

This is very simliar to normal mode, but it's all about selecting text. It will `visual`ly highlight the text that you have selected. The keybindings are all about changing what text you have selected or operating on the selection (e.g., `d`eleting that text, `c`hanging it, or `y`anking/`p`asting it).

You can press `v` to enter `v`isual mode or `V` to enter `V`isual line mode, where it will always select whole lines of text.

##### Command-line Mode

Some video games also have a mode where you can enter commands into the game. For example, pressing `~` may open a console where you can type commands in, e.g., `noclip` to turn off collision detection, allowing you to walk through walls.

Vim has `command-line` mode, which lets you enter commands that will alter how vim behaves or run commands on text.

