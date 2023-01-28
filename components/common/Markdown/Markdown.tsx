import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import MarkdownConfig from './Markdown.config';

interface IMarkdownProps {
  markdown: string;
}

const Markdown = ({ markdown }: IMarkdownProps) => {
  return (
    <ReactMarkdown
      children={markdown}
      components={ChakraUIRenderer(MarkdownConfig)}
      remarkPlugins={[remarkGfm, remarkGemoji]}
    />
  );
};

export default Markdown;
