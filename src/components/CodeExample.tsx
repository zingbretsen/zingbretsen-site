'use client';

import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

interface CodeExampleProps {
  language?: string;
  prompt?: string;
  children: React.ReactNode;
}

interface InputProps {
  children: string;
}

interface OutputProps {
  children: string;
}

// Sub-components for MDX usage - these render a span with data attribute
export function Input({ children }: InputProps) {
  return <span data-code-type="input">{children}</span>;
}
Input.displayName = 'Input';

export function Output({ children }: OutputProps) {
  return <span data-code-type="output">{children}</span>;
}
Output.displayName = 'Output';

async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to fallback
    }
  }

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

export default function CodeExample({
  language = 'bash',
  prompt = '$',
  children,
}: CodeExampleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLElement>(null);
  const [displayText, setDisplayText] = React.useState('');
  const [inputsText, setInputsText] = React.useState<string[]>([]);
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied' | 'failed'>('idle');

  // After children render, read from DOM and build display text
  useEffect(() => {
    if (!containerRef.current) return;

    const parts: Array<{ type: 'input' | 'output'; content: string }> = [];
    const inputs: string[] = [];

    // Find all spans with data-code-type
    const spans = containerRef.current.querySelectorAll('[data-code-type]');
    spans.forEach((span) => {
      const type = span.getAttribute('data-code-type') as 'input' | 'output';
      const content = span.textContent || '';
      parts.push({ type, content });
      if (type === 'input') {
        inputs.push(content);
      }
    });

    // Build display text
    const displayLines: string[] = [];
    parts.forEach((part) => {
      if (part.type === 'input') {
        const lines = part.content.split('\n');
        lines.forEach((line, i) => {
          if (i === 0) {
            displayLines.push(`${prompt} ${line}`);
          } else {
            displayLines.push(`  ${line}`);
          }
        });
      } else {
        displayLines.push(part.content);
      }
    });

    setDisplayText(displayLines.join('\n'));
    setInputsText(inputs);
  }, [children, prompt]);

  // Apply syntax highlighting after display text changes
  useEffect(() => {
    if (codeRef.current && displayText) {
      codeRef.current.removeAttribute('data-highlighted');
      hljs.highlightElement(codeRef.current);
    }
  }, [displayText]);

  const handleCopy = async () => {
    const textToCopy = inputsText.join('\n');
    const success = await copyToClipboard(textToCopy);
    setCopyStatus(success ? 'copied' : 'failed');
    setTimeout(() => setCopyStatus('idle'), 2000);
  };

  return (
    <>
      {/* Hidden container to render children and extract content */}
      <div ref={containerRef} style={{ display: 'none' }}>
        {children}
      </div>
      <pre className="code-example">
        <code ref={codeRef} className={`language-${language}`}>
          {displayText}
        </code>
        <button
          className={`copy-button ${copyStatus === 'copied' ? 'copied' : ''}`}
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
        >
          {copyStatus === 'idle' && 'Copy'}
          {copyStatus === 'copied' && 'Copied!'}
          {copyStatus === 'failed' && 'Failed'}
        </button>
      </pre>
    </>
  );
}
