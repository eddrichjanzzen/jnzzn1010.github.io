import rangeParser from 'parse-numeric-range';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('python', python);

const syntaxTheme = oneLight;

const MarkdownConfig: object = {
  code({ node, inline, className, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    const hasMeta = node?.data?.meta;

    const applyHighlights: object = (applyHighlights: number) => {
      if (hasMeta) {
        const RE = /{([\d,-]+)}/;
        const metadata = node.data.meta?.replace(/\s/g, '');
        const strlineNumbers = RE?.test(metadata) ? RE?.exec(metadata)[1] : '0';

        const hightlightLines = rangeParser(strlineNumbers);
        const highlight = hightlightLines;
        const data: string | null = highlight.includes(applyHighlights)
          ? 'highlight'
          : null;
        return { data };
      } else {
        return {};
      }
    };

    return match ? (
      <SyntaxHighlighter
        style={syntaxTheme}
        language={match[1]}
        PreTag="div"
        className="codeStyle"
        showLineNumbers={false}
        wrapLines={hasMeta ? true : false}
        useInlineStyles={true}
        lineProps={applyHighlights}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};

export default MarkdownConfig;
