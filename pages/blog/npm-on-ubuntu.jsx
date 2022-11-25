import Layout from '@components/layout';
import React from 'react';

import { getBlogPosts } from '../../src/utils/getblog';
const slug = 'npm-on-ubuntu';

const BlogPost = ({ meta }) => (
  <Layout title="Blog" meta={meta}>
    <p>
      If you are developing websites in 2020 it is highly likely that NodeJS forms at least part of
      your toolchain. Whether you&apos;re developing on the backend or frontend, NodeJS plays an
      important part in the JavaScript ecosystem.
    </p>
    <h2>The Problem</h2>
    <p>
      That being said, I have faced difficulties using NodeJS and the Node Package Manager (NPM) on
      Ubuntu, specifically relating to permissions. You can install `nodejs` and `npm` via `apt-get`
      as follows:
      <code style={{ display: 'block' }} language="bash">
        <pre>sudo apt-get install nodejs npm</pre>
      </code>
    </p>
    <p>
      This does just fine if you want to create a new app and install packages in a local
      `node_modules` directory. However, I find that this breaks down if you want to install some
      packages globally on your system. Trying to run the following results in a failure to install
      due to permissions errors:
      <code style={{ display: 'block' }} language="bash">
        <pre>npm install -g hello-world-npm</pre>
      </code>
    </p>
    <p>
      You may see something like the following:
      <code style={{ display: 'block' }}>
        <pre>{`npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules
npm ERR! code EACCES
npm ERR! syscall access
npm ERR! path /usr/local/lib/node_modules
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
npm ERR!  { [Error: EACCES: permission denied, access '/usr/local/lib/node_modules']
npm ERR!   stack:
npm ERR!    'Error: EACCES: permission denied, access \'/usr/local/lib/node_modules\'',
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
npm ERR! the command again as root/Administrator.`}</pre>
      </code>
    </p>

    <p>
      The default install path for globally installed modules is `/usr/local/`. This can be verified
      by running:
      <code style={{ display: 'block' }} language="bash">
        <pre>{`npm config get prefix`}</pre>
      </code>
    </p>

    <p>
      However, by default, NPM does not have the permissions to write files to that directory
      properly. You may be tempted to follow the error message&apos;s advice and re-run the install
      command as root/Administrator by re-running the command with `sudo`. I would recommend
      _against_ doing so. See{' '}
      <a href="https://medium.com/@ExplosionPills/dont-use-sudo-with-npm-still-66e609f5f92">
        this article
      </a>{' '}
      about why you shouldn&apos;t install npm packages with `sudo`.
    </p>

    <h2>A Solution</h2>
    <p>
      If we don&apos;t want to have to install our global packages with `sudo`, what&apos;s a dev to
      do? I found the most straightforward fix to be changing `npm`&apos;s install prefix. This
      allows `npm` to install your packages in a directory that you have full control of. For
      example:
      <code style={{ display: 'block' }} language="bash">
        <pre>npm config set prefix &apos;~/.npm-packages&apos;</pre>
      </code>
    </p>

    <p>
      The next time you `npm install -g` a package, it will install into that directory instead of
      `/usr/local/`. You shouldn&apos;t have to use `sudo`, and all the permissions should be set
      correctly. Binaries will not yet be accessible on the commandline, however, because the
      `~/.npm-packages/bin` directory is not yet in your `PATH` variable. You will want to add the
      following line to your shell&apos;s startup script (e.g., .bash_profile, .zshenv, .profile,
      etc.) to ensure that binaries you&apos;ve installed are available in your shell:
      <code style={{ display: 'block' }} language="bash">
        <pre>export PATH=$PATH:~/.npm-packages/bin</pre>
      </code>
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
      permanently installing software on your system you can use the wonderful `npx` command. `npx`
      will let you run commands from NPM packages without having to install them on your system. If
      you want to create a new react app, you can do so without pre-installing any react packages:
      <code style={{ display: 'block' }} language="bash">
        <pre>npx create-react-app</pre>
      </code>
    </p>

    <p>
      If you will be running these commands frequently, you may want to permanently install the
      packags on your system so you don&apos;t need to download the files each time you run the
      command. If you&apos;re just trying out a new tool, though, `npx` is a simple way of getting
      the result you want without having to worry about installing anything.
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
