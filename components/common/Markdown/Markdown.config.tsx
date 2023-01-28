import rangeParser from 'parse-numeric-range';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import MarkdownContainer from './Markdown.styles';

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
      <MarkdownContainer>
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
      </MarkdownContainer>
    ) : (
      <code className={className} {...props} />
    );
  },
};

export default MarkdownConfig;
