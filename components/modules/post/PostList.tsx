import { Box } from '@chakra-ui/react';
import Post from '../../../interfaces/Post.interface';
import PostItem from './PostItem';

export interface IPostPageProps {
  posts: Post[];
}

const PostList = ({ posts }: IPostPageProps) => {
  return (
    <Box mt={4}>
      {posts.map((post) => (
        <PostItem post={post} key={post.title} />
      ))}
    </Box>
  );
};

export default PostList;
