import { Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

export interface IPostBodyProps {
  content: string;
}

const PostBody = ({ content }: IPostBodyProps) => {
  return (
    <Box>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Box>
  );
};

export default PostBody;
