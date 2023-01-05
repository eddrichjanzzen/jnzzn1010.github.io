import { Box, Heading } from '@chakra-ui/react';
import PostItem from '../../components/Post/PostItem';
import Post from '../../interfaces/Post.interface';
import { getAllPosts } from '../../lib/posts.api';

type PostPageProps = {
  posts: Post[];
};

const PostsPage = ({ posts }: PostPageProps) => {
  const mainPost = posts[0];

  return (
    <Box>
      <Heading>Latest Posts</Heading>
      <Box border={'1px'}>
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
  ]);

  return {
    props: { posts },
  };
};
