
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock/CodeBlock';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

interface IMarkdownProps {
  markdown: string;
}

const Markdown = ({markdown}: IMarkdownProps) => {
  return (
    <ReactMarkdown
      children={markdown}
      components={ChakraUIRenderer({ code: CodeBlock })}
    />
  );


}

export default Markdown;