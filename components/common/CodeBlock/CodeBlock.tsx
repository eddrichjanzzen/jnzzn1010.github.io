import Prism from 'prismjs';

interface ICodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FunctionComponent<ICodeBlockProps> = ({ code, language }) => {
  const handleRef = (el: HTMLPreElement | null) => {
    if (el) {
      Prism.highlightElement(el);
    }
  };

  return (
    <pre>
      <code ref={handleRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;