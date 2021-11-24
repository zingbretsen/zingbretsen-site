---
path: '/blog/list-files-installed-ubuntu'
date: '2021-11-24'
title: 'List Files Installed by a Package with dpkg'
tags: ['quick-byte', 'ubuntu', 'linux', 'dpkg']
---

The command `dpkg` has many uses beyond installing and removing `.deb` files. This includes finding out what files were added to your system when you installed a package, as well as showing what package installed a given file.

One use case that I came across recently was trying to install the `zsh` keybindings from the `fzf` package. They were not enabled by default. On OS X, there is an `install` script that you can run to install the keybindings in your shell, but I couldn't find if that file existed in the Ubuntu version.

## List Files Installed by a Package

`dpkg -L` lets you see what files a package installed on your system, whether installed directly from a `.deb` file or installed via `apt`.

```bash
dpkg -L fzf
```

    ## /.
    ## /usr
    ## /usr/bin
    ## /usr/bin/fzf
    ## /usr/bin/fzf-tmux
    ## /usr/share
    ## /usr/share/doc
    ## /usr/share/doc/fzf
    ## /usr/share/doc/fzf/README.Debian
    ## /usr/share/doc/fzf/changelog.Debian.gz
    ## /usr/share/doc/fzf/copyright
    ## /usr/share/doc/fzf/examples
    ## /usr/share/doc/fzf/examples/completion.bash
    ## /usr/share/doc/fzf/examples/completion.zsh
    ## /usr/share/doc/fzf/examples/fzf.vim
    ## /usr/share/doc/fzf/examples/key-bindings.bash
    ## /usr/share/doc/fzf/examples/key-bindings.fish
    ## /usr/share/doc/fzf/examples/key-bindings.zsh
    ## /usr/share/doc/fzf/examples/plugin
    ## /usr/share/fish
    ## /usr/share/fish/vendor_functions.d
    ## /usr/share/fish/vendor_functions.d/fzf_key_bindings.fish
    ## /usr/share/man
    ## /usr/share/man/man1
    ## /usr/share/man/man1/fzf-tmux.1.gz
    ## /usr/share/man/man1/fzf.1.gz
    ## /usr/share/doc/fzf/examples/plugin/fzf.vim

This command (`dpkg -L package-name`) will "[l]ist files installed to your system from package-name." As you can see, this shows not only the binaries that were installed (`fzf` and `fzf-tmux`), but a number of other files, as well.

The files I was looking for were completion.zsh and key-bindings.zsh--I was able to source these in my .zshrc file, and now I have the full `fzf` functionality enabled.

## Which Package Installed a File

A complementary command is `dpkg -S`, which will search for a given pattern and tell you what package(s) installed the matching file(s). For example:

```bash
dpkg -S /usr/share/zsh/vendor-completions/_rg
```

    ## ripgrep: /usr/share/zsh/vendor-completions/_rg

By giving the full path to the file, I get the results for just that one file. I can see that the `ripgrep` package installed that `_rg` file.

I can also give a pattern to see what packages installed all files matching that pattern:

```bash
dpkg -S vendor-completions | sort | head -n 4
```

    ## curl: /usr/share/zsh/vendor-completions/_curl
    ## docker-ce-cli: /usr/share/zsh/vendor-completions/_docker
    ## docker-compose: /usr/share/zsh/vendor-completions/_docker-compose
    ## flatpak: /usr/share/zsh/vendor-completions/_flatpak
