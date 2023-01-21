import { Box } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import Markdown from '../common/Markdown/Markdown';

export interface IPostBodyProps {
  content: string;
}

const PostBody = ({ content }: IPostBodyProps) => {
  return (
    <Box>
      <Markdown markdown={content} />
      {/* <ReactMarkdown components={ChakraUIRenderer()} children={content}/> */}
    </Box>
  );
};

export default PostBody;
