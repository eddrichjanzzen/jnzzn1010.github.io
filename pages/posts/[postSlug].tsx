import { Box, Heading } from '@chakra-ui/react';
import PostBody from '../../components/post/PostBody';

import Post from '../../interfaces/Post.interface';
import { getAllPosts, getPostBySlug } from '../../lib/posts.api';

export interface IPostDetailPageParams {
  post: Post;
}

const PostDetailPage = ({ post }: IPostDetailPageParams) => {
  return (
    <Box>
      <Heading mb={8}>{post.title}</Heading>
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
  const post = getPostBySlug(params.postSlug, ['title', 'content']);

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
