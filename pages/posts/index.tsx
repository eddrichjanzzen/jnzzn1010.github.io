import { Box, Heading } from '@chakra-ui/react';
import PostItem from '../../components/Post/PostItem';
import Post from '../../interfaces/Post.interface';
import { getAllPosts } from '../../lib/posts.api';

type PostPageProps = {
  posts: Post[];
};

const PostsPage = ({ posts }: PostPageProps) => {
  return (
    <Box>
      <Heading variant={'h1'}>Latest Posts</Heading>
      <Box>
        {posts.map((post) => (
          <PostItem post={post} key={post.title} />
        ))}
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
    // 'date',
    'category',
    'tags',
    'description',
    'content',
  ]);

  return {
    props: { posts },
  };
};
