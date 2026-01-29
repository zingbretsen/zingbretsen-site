import type { Metadata } from 'next';
import Script from 'next/script';

import Header from '@/components/header';
import Footer from '@/components/footer';

import '../styles/globals.css';
import '../styles/typography.css';
import 'highlight.js/styles/a11y-dark.css';

export const metadata: Metadata = {
  title: {
    default: 'Zach Ingbretsen',
    template: '%s | Zach Ingbretsen',
  },
  description: 'Personal portfolio and blog of Zach Ingbretsen',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://umami.ingbretsenhome.com/script.js"
          data-website-id="e1c01b04-3d43-485f-9f75-0dd27468372f"
          strategy="afterInteractive"
        />
        <div id="app">
          <Header />
          <main className="container">
            <article>{children}</article>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
