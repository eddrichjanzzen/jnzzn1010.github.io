import { Box, Heading, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import PostBody from '../../components/post/PostBody';

import Post from '../../interfaces/Post.interface';
import { getAllPosts, getPostBySlug } from '../../lib/posts.api';

export interface IPostDetailPageParams {
  post: Post;
}

const PostDetailPage = ({ post }: IPostDetailPageParams) => {
  const formattedDate = dayjs(post.date).format('MMMM DD, YYYY');

  return (
    <Box>
      <Heading mb={4} variant="h1" color={'teal.400'}>
        {post.title}
      </Heading>
      <Text size="xs" fontWeight={400} color={'gray.500'}>
        {`Posted on ${formattedDate}  • ${post.author}`}
      </Text>
      <PostBody content={post.content} />
    </Box>
  );
};

type Params = {
  params: {
    postSlug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.postSlug, [
    'title',
    'content',
    'date',
    'author',
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          postSlug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default PostDetailPage;
