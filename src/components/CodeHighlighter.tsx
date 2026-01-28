'use client';

import { useEffect } from 'react';
import hljs from 'highlight.js';
import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('python', python);
hljs.registerLanguage('javascript', javascript);

export default function CodeHighlighter({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <>{children}</>;
}
