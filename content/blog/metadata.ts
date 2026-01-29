export interface PostMetadata {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}

export const metadata: Record<string, PostMetadata> = {
  'list-files-installed-ubuntu': {
    title: 'List Files Installed by a Package with dpkg',
    date: '2021-11-24',
    tags: ['quick-byte', 'ubuntu', 'linux', 'dpkg'],
    excerpt:
      'The command `dpkg` has many uses beyond installing and removing `.deb` files. This includes finding out what files were added to your system when you installed a package...',
  },
  'rsync-include-exclude': {
    title: 'How to Selectively Copy Files with Rsync',
    date: '2021-10-03',
    tags: ['linux', 'utils'],
    excerpt:
      'One aspect of rsync that I always struggle with is the syntax for selectively syncing a subset of files. This should help...',
  },
};
