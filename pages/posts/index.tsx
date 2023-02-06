import { Box, Heading } from '@chakra-ui/react';
import PostList from '../../components/post/PostList';
import TagGroup from '../../components/tag/TagGroup';
import Post from '../../interfaces/Post.interface';
import { getAllPosts } from '../../lib/posts.api';

export interface IPostPageProps {
  posts: Post[];
}

const PostsPage = ({ posts }: IPostPageProps) => {
  return (
    <Box>
      <Box mb={4}>
        <TagGroup />
      </Box>
      <Box>
        <Heading variant={'h1'}>Latest Posts</Heading>
        <PostList posts={posts} />
      </Box>
    </Box>
  );
};

export default PostsPage;

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'layout',
    'author',
    'date',
    'category',
    'tags',
    'description',
    'content',
    'slug',
  ]);

  return {
    props: { posts },
  };
};
