import Layout from '@components/layout';
import React from 'react';

import { getBlogPosts } from '../../src/utils/getblog';
const slug = 'npm-on-ubuntu';

const BlogPost = ({ meta }) => (
  <Layout meta={meta}>
    <p>
      If you are developing websites in 2020 it is highly likely that NodeJS forms at least part of
      your toolchain. Whether you&apos;re developing on the backend or frontend, NodeJS plays an
      important part in the JavaScript ecosystem.
    </p>
    <h2>The Problem</h2>
    <p>
      That being said, I have faced difficulties using NodeJS and the Node Package Manager (NPM) on
      Ubuntu, specifically relating to permissions. You can install <code>nodejs</code> and{' '}
      <code>npm</code> via <code>apt-get</code>
      as follows:
    </p>
    <pre>
      <code className="language-bash">sudo apt-get install nodejs npm</code>
    </pre>
    <p>
      This does just fine if you want to create a new app and install packages in a local
      <code>node_modules</code> directory. However, I find that this breaks down if you want to
      install some packages globally on your system. Trying to run the following results in a
      failure to install due to permissions errors:
    </p>
    <pre>
      <code className="language-bash">npm install -g hello-world-npm</code>
    </pre>
    <p>
      You may see something like the following:
      <pre>
        <code className="language-bash">
          {`npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules
npm ERR! code EACCES
npm ERR! syscall access
npm ERR! path /usr/local/lib/node_modules
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
npm ERR!  { [Error: EACCES: permission denied, access '/usr/local/lib/node_modules']
npm ERR!   stack:
npm ERR!    'Error: EACCES: permission denied, access '/usr/local/lib/node_modules'',
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/usr/local/lib/node_modules' }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the current user
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.`}
        </code>
      </pre>
    </p>

    <p>
      The default install path for globally installed modules is{' '}
      <code className="language-bash">/usr/local/</code>. This can be verified by running:
    </p>
    <pre>
      <code className="language-bash">{`npm config get prefix`}</code>
    </pre>

    <p>
      However, by default, NPM does not have the permissions to write files to that directory
      properly. You may be tempted to follow the error message&apos;s advice and re-run the install
      command as root/Administrator by re-running the command with <code>sudo</code>. I would
      recommend <b>against</b> doing so. See{' '}
      <a href="https://medium.com/@ExplosionPills/dont-use-sudo-with-npm-still-66e609f5f92">
        this article
      </a>{' '}
      about why you shouldn&apos;t install npm packages with <code>sudo</code>.
    </p>

    <h2>A Solution</h2>
    <p>
      If we don&apos;t want to have to install our global packages with <code>sudo</code>,
      what&apos;s a dev to do? I found the most straightforward fix to be changing <code>npm</code>
      &apos;s install prefix. This allows <code>npm</code> to install your packages in a directory
      that you have full control of. For example:
      <pre>
        <code className="language-bash">npm config set prefix &apos;~/.npm-packages&apos;</code>
      </pre>
    </p>

    <p>
      The next time you <code>npm install -g</code> a package, it will install into that directory
      instead of
      <code>/usr/local/</code>. You shouldn&apos;t have to use <code>sudo</code>, and all the
      permissions should be set correctly. Binaries will not yet be accessible on the commandline,
      however, because the
      <code>~/.npm-packages/bin</code> directory is not yet in your <code>PATH</code> variable. You
      will want to add the following line to your shell&apos;s startup script (e.g., .bash_profile,
      .zshenv, .profile, etc.) to ensure that binaries you&apos;ve installed are available in your
      shell:
      <pre>
        <code className="language-bash">export PATH=$PATH:~/.npm-packages/bin</code>
      </pre>
    </p>

    <h2>Another Solution</h2>
    <p>
      Global packages are often used for installing packages that you may want to call from your
      commandline, as opposed to code that is imported in your individual projects. For example, if
      you want to create a new react app, or use the AWS Amplify CLI, you will likely want to
      install these packages globally so that you have access to the binaries on your commandline.
    </p>
    <p>
      If you are just testing out a new package or framework and want to run commands without
      permanently installing software on your system you can use the wonderful <code>npx</code>{' '}
      command. <code>npx</code>
      will let you run commands from NPM packages without having to install them on your system. If
      you want to create a new react app, you can do so without pre-installing any react packages:
      <pre>
        <code className="language-bash">npx create-react-app</code>
      </pre>
    </p>

    <p>
      If you will be running these commands frequently, you may want to permanently install the
      packags on your system so you don&apos;t need to download the files each time you run the
      command. If you&apos;re just trying out a new tool, though, <code>npx</code> is a simple way
      of getting the result you want without having to worry about installing anything.
    </p>
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
