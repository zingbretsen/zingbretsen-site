import React from 'react';

import Typography from 'typography';
import parnassusTheme from 'typography-theme-parnassus';

import '../styles/globals.css';
import 'highlight.js/styles/a11y-dark.css';

const typography = new Typography(parnassusTheme);

// Output CSS as string.
typography.toString();

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
