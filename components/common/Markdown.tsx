import { Prose } from '@nikolovlazar/chakra-ui-prose';

interface IMarkdownProps {
  markdown: string;
}

const Markdown = ({ markdown }: IMarkdownProps) => {
  return <Prose dangerouslySetInnerHTML={{ __html: markdown }} />;
};

export default Markdown;
