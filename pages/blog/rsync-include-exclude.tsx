import Layout from '@components/layout';
import React from 'react';

import { getBlogPosts } from '../../src/utils/getblog';

const slug = 'rsync-include-exclude';

const BlogPost = ({ meta }) => {
  return (
    <Layout meta={meta}>
      <>
        <p>
          The utility <a href="https://rsync.samba.org/">rsync</a> is fantastic for efficient,
          incremental backups of files. It can be used to copy files locally or to back files up to
          a remote machine over SSH.
        </p>

        <p>
          One aspect of <code className="bash">rsync</code> that I always struggle with, however, is
          the syntax for selectively syncing a subset of files. It does not use the normal wildcard
          expansion that other shell commands use, and it is particularly persnickety about how you
          order your includes and excludes.
        </p>

        <h2> Full backup </h2>

        <p>
          By default, it will copy the entire contents of the{' '}
          <code className="language-bash">src</code> directory to the{' '}
          <code className="language-bash">dest</code> location:
        </p>
        <pre>
          <code className="bash">{`rsync -avz src/ dest/`}</code>
        </pre>

        <p>
          This will include all files and subdirectories, including hidden ones like{' '}
          <code className="language-bash">.git/</code>, which you may not want to copy.
        </p>

        <h2>Excluding a subset of files</h2>

        <p>
          To exclude files or directories, you use the{' '}
          <code className="language-bash">--exclude</code> flag. You can exclude specific files or
          directories or files/directories that match a particular pattern. This will exclude the
          <code className="language-bash">.git</code> directory and any file that ends with{' '}
          <code className="language-bash">yml</code>:
        </p>

        <pre>
          <code className="bash">
            rsync -avz --exclude=&apos;.git/&apos; --exclude=&apos;*.yml&apos; src/ dest/
          </code>
        </pre>

        <h2>Including a subset of files</h2>

        <p>
          However, to <b>only</b> copy files that match a particular pattern is more complicated. As
          seen above, <code className="language-bash">rsync</code> includes all files and folders by
          default. In order to only <b>include</b> files of a certain type, we need to{' '}
          <b>exclude</b> all the other files <b>but not all directories</b>.
        </p>

        <p>
          We need to tell <code className="language-bash">rsync</code> explicitly that we want to
          _include_ all directories because excluding <code className="language-bash">*</code> would
          exclude directories as well as files. The following command will copy all{' '}
          <code className="language-plaintext">*.txt</code> files to the destination as desired:
          <pre>
            <code className="bash">
              {"rsync -avz --include='*/' --include='*.txt' --exclude='*' src/ dest/"}
            </code>
          </pre>
        </p>

        <p>We need all of those pieces, with the includes first and the exclude second:</p>

        <ol>
          <li>Include all directories</li>
          <li>
            Include all <code className="language-bash">*.txt</code> files
          </li>
          <li>Exclude everything else</li>
        </ol>
        <h2>Things that seem like they should work, but don&apos;t</h2>

        <p>
          The first thing you might try is to just include the{' '}
          <code className="language-bash">*.txt</code> files, but this will copy all files because
          <code className="language-bash">rsync</code> includes all files by default:
          <pre>
            <code className="bash">{"rsync -avz --include='*.txt' --exclude='*' src/ dest/"}</code>
          </pre>
        </p>

        <p>
          If you the exclude all other files but don&apos;t include all directories (as in the
          following example), you will only copy the <code className="language-bash">*.txt</code>{' '}
          files that are in the root of your <code className="language-bash">src</code> directory,
          but not in any subdirectories. This is because excluding{' '}
          <code className="language-bash">*</code> excludes all files and directories.
          <pre>
            <code className="language-bash">
              rsync -avz --include=&apos;*.txt&apos; --exclude=&apos;*&apos; src/ dest/
            </code>
          </pre>
        </p>

        <p>
          And if you have all the proper includes put the exclude first, you will not copy any files
          because the order matters. Here, you are excluding all files and directories right off the
          bat, and no later includes will change that:
          <pre>
            <code className="language-bash">
              rsync -avz --exclude=&apos;*&apos; --include=&apos;*/&apos;
              --include=&apos;*.txt&apos; src/ dest/
            </code>
          </pre>
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
