import { Box } from '@chakra-ui/react';
import Markdown from '../../common/Markdown';

export interface IPostBodyProps {
  content: string;
}

const PostBody = ({ content }: IPostBodyProps) => {
  return (
    <Box>
      <Markdown markdown={content} />
    </Box>
  );
};

export default PostBody;
