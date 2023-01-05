import { Box } from '@chakra-ui/react';
import Post from '../../interfaces/Post.interface';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  return <Box>{post.title}</Box>;
};

export default PostItem;
