import type { MDXComponents } from 'mdx/types';
import CodeExample, { Input, Output } from '@/components/CodeExample';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    CodeExample,
    Input,
    Output,
  };
}
