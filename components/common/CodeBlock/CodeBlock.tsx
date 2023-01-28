import Prism from 'prismjs';

interface ICodeBlockProps {
  value: string;
  language: string;
  className?: string;
}

const CodeBlock: React.FunctionComponent<ICodeBlockProps> = ({
  value,
  language,
  className,
}) => {
  const highlightedCode = Prism.highlight(value, Prism.languages[language], '');
  return (
    <pre className={className}>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};

export default CodeBlock;
