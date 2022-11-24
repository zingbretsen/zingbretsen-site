import Layout from '@components/layout';
import React from 'react';

import { getBlogPosts } from '../../src/utils/getblog';
const slug = 'rsync-include-exclude';

const BlogPost = ({ meta }) => {
  return (
    <Layout title="Blog" meta={meta}>
      <>
        <p>
          The utility <a href="https://rsync.samba.org/">rsync</a> is fantastic for efficient,
          incremental backups of files. It can be used to copy files locally or to back files up to
          a remote machine over SSH.
        </p>

        <p>
          One aspect of `rsync` that I always struggle with, however, is the syntax for selectively
          syncing a subset of files. It does not use the normal wildcard expansion that other shell
          commands use, and it is particularly persnickety about how you order your includes and
          excludes.
        </p>

        <h2> Full backup </h2>

        <p>
          By default, it will copy the entire contents of the `src` directory to the `dest`
          location:
          <code style={{ display: 'block' }}>
            <pre>rsync -avz src/ dest/</pre>
          </code>
        </p>

        <p>
          This will include all files and subdirectories, including hidden ones like `.git/`, which
          you may not want to copy.
        </p>

        <h2>Excluding a subset of files</h2>

        <p>
          To exclude files or directories, you use the `--exclude` flag. You can exclude specific
          files or directories or files/directories that match a particular pattern. This will
          exclude the `.git` directory and any file that ends with `yml`:
          <code style={{ display: 'block' }} language="bash">
            <pre>rsync -avz --exclude=&apos;.git/&apos; --exclude=&apos;*.yml&apos; src/ dest/</pre>
          </code>
        </p>

        <h2>Including a subset of files</h2>

        <p>
          However, to _only_ copy files that match a particular pattern is more complicated. As seen
          above, `rsync` includes all files and folders by default. In order to only _include_ files
          of a certain type, we need to _exclude_ all the other files _*but not all directories*_.
        </p>

        <p>
          We need to tell `rsync` explicitly that we want to _include_ all directories because
          excluding `*` would exclude directories as well as files. The following command will copy
          all `*.txt` files to the destination as desired:
          <code style={{ display: 'block' }} language="bash">
            <pre>{"rsync -avz --include='*/' --include='*.txt' --exclude='*' src/ dest/"}</pre>
          </code>
        </p>

        <p>We need all of those pieces, with the includes first and the exclude second:</p>

        <ol>
          <li>Include all directories</li>
          <li>Include all `*.txt` files</li>
          <li>Exclude everything else</li>
        </ol>
        <h2>Things that seem like they should work, but don&apos;t</h2>

        <p>
          The first thing you might try is to just include the `*.txt` files, but this will copy all
          files because `rsync` includes all files by default:
          <code style={{ display: 'block' }}>
            <pre>{"rsync -avz --include='*.txt' --exclude='*' src/ dest/"}</pre>
          </code>
        </p>

        <p>
          If you the exclude all other files but don&apos;t include all directories (as in the
          following example), you will only copy the `*.txt` files that are in the root of your
          `src` directory, but not in any subdirectories. This is because excluding `*` excludes all
          files and directories.
          <code style={{ display: 'block' }} language="bash">
            <pre>rsync -avz --include=&apos;*.txt&apos; --exclude=&apos;*&apos; src/ dest/</pre>
          </code>
        </p>

        <p>
          And if you have all the proper includes put the exclude first, you will not copy any files
          because the order matters. Here, you are excluding all files and directories right off the
          bat, and no later includes will change that:
          <code style={{ display: 'block' }} language="bash">
            <pre>
              rsync -avz --exclude=&apos;*&apos; --include=&apos;*/&apos;
              --include=&apos;*.txt&apos; src/ dest/
            </pre>
          </code>
        </p>
      </>
    </Layout>
  );
};

export default BlogPost;

export async function getStaticProps() {
  let meta = getBlogPosts()
    .filter((p) => p.path == slug)
    .pop();

  return {
    props: { meta }
  };
}
