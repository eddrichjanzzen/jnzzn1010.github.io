import { Box, Heading, Text } from '@chakra-ui/react';
import CustomLink from '../../components/common/CustomLink';
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
      <Box display="flex" flexDir="column" alignItems="flex-end">
        <Text fontWeight="semibold" fontSize="md">
          Other Topics
        </Text>
        <CustomLink href="/coding-problems" fontSize="0.75em">
          Coding Problems
        </CustomLink>
        <CustomLink href="/personal-development" fontSize="0.75em">
          Personal Development
        </CustomLink>
      </Box>
      <Box mb={4}>
        <TagGroup />
      </Box>
      <Box>
        <Box>
          <Heading variant={'h1'}>Latest Posts</Heading>
        </Box>
        <PostList posts={posts} />
      </Box>
    </Box>
  );
};

export default PostsPage;

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
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
