import Layout from '@components/layout';
import React from 'react';

import { getBlogPosts } from '../../src/utils/getblog';
const slug = 'list-files-installed-ubuntu';

const BlogPost = ({ meta }) => (
  <Layout meta={meta}>
    <p>
      The command <code>dpkg</code> has many uses beyond installing and removing <code>.deb</code>{' '}
      files. This includes finding out what files were added to your system when you installed a
      package, as well as showing what package installed a given file.
    </p>

    <p>
      One use case that I came across recently was trying to install the <code>zsh</code>{' '}
      keybindings from the
      <code>fzf</code> package. They were not enabled by default. On OS X, there is an{' '}
      <code>install</code> script that you can run to install the keybindings in your shell, but I
      couldn&apos;t find if that file existed in the Ubuntu version.
    </p>

    <h2>List Files Installed by a Package</h2>

    <p>
      <code>dpkg -L</code> lets you see what files a package installed on your system, whether
      installed directly from a <code>.deb</code> file or installed via <code>apt</code>.
    </p>

    <pre>
      <code className="language-bash">
        {`dpkg -L fzf
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
    ## /usr/share/doc/fzf/examples/plugin/fzf.vim`}
      </code>
    </pre>

    <p>
      This command <code>dpkg -L package-name</code> will &quot;[l]ist files installed to your
      system from package-name.&quot; As you can see, this shows not only the binaries that were
      installed (<code>fzf</code> and <code>fzf-tmux</code>), but a number of other files, as well.
    </p>

    <p>
      The files I was looking for were completion.zsh and key-bindings.zsh--I was able to source
      these in my .zshrc file, and now I have the full <code>fzf</code> functionality enabled.
    </p>

    <h2>Which Package Installed a File</h2>

    <p>
      A complementary command is <code>dpkg -S</code>, which will search for a given pattern and
      tell you what package(s) installed the matching file(s). For example:
    </p>

    <pre>
      <code className="language-bash">
        {`dpkg -S /usr/share/zsh/vendor-completions/_rg
    ## ripgrep: /usr/share/zsh/vendor-completions/_rg`}
      </code>
    </pre>

    <p>
      By giving the full path to the file, I get the results for just that one file. I can see that
      the <code>ripgrep</code> package installed that <code>_rg</code> file.
    </p>

    <p>I can also give a pattern to see what packages installed all files matching that pattern:</p>

    <pre>
      <code className="language-bash">
        {`dpkg -S vendor-completions | sort | head -n 4
    ## curl: /usr/share/zsh/vendor-completions/_curl
    ## docker-ce-cli: /usr/share/zsh/vendor-completions/_docker
    ## docker-compose: /usr/share/zsh/vendor-completions/_docker-compose
    ## flatpak: /usr/share/zsh/vendor-completions/_flatpak`}
      </code>
    </pre>
  </Layout>
);

export default BlogPost;

export async function getStaticProps() {
  let meta = getBlogPosts()
    .filter((p) => p.path == slug)
    .pop();

  return {
    props: { meta }
  };
}
