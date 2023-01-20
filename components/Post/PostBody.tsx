import { Box } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

export interface IPostBodyProps {
  content: string;
}

const PostBody = ({ content }: IPostBodyProps) => {
  return (
    <Box>
      <ReactMarkdown components={ChakraUIRenderer()} children={content}/>
    </Box>
  );
};

export default PostBody;
