import React from 'react';
import Script from 'next/script';

import Typography from 'typography';
import parnassusTheme from 'typography-theme-parnassus';

import '../styles/globals.css';
import '../src/components/layout.css';
import 'highlight.js/styles/a11y-dark.css';

const typography = new Typography(parnassusTheme);

// Output CSS as string.
typography.toString();

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://umami.ingbretsenhome.com/script.js"
        data-website-id="e1c01b04-3d43-485f-9f75-0dd27468372f"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
