'use client';

import { useEffect } from 'react';
import hljs from 'highlight.js';
import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('python', python);
hljs.registerLanguage('javascript', javascript);

function extractCommandsOnly(text: string): string {
  const lines = text.split('\n');

  // Check if this looks like a shell session (has $ or % prompts)
  const promptLines = lines.filter((line) => /^\s*[$%>]\s/.test(line));

  if (promptLines.length > 0) {
    // Extract only the commands, stripping the prompt
    return promptLines
      .map((line) => line.replace(/^\s*[$%>]\s*/, ''))
      .join('\n');
  }

  // No prompts detected, return original text
  return text;
}

async function copyToClipboard(text: string): Promise<boolean> {
  // Try modern clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to fallback
    }
  }

  // Fallback for older browsers or non-secure contexts
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textArea);
    return success;
  } catch {
    return false;
  }
}

function addCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach((pre) => {
    // Skip if already has a copy button
    if (pre.querySelector('.copy-button')) return;

    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code to clipboard');

    button.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const code = pre.querySelector('code');
      const rawText = code?.textContent || pre.textContent || '';
      const textToCopy = extractCommandsOnly(rawText);

      const success = await copyToClipboard(textToCopy);

      if (success) {
        button.textContent = 'Copied!';
        button.classList.add('copied');
      } else {
        button.textContent = 'Failed';
      }

      setTimeout(() => {
        button.textContent = 'Copy';
        button.classList.remove('copied');
      }, 2000);
    });

    pre.appendChild(button);
  });
}

export default function CodeHighlighter({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    hljs.highlightAll();
    addCopyButtons();
  }, []);

  return <>{children}</>;
}
