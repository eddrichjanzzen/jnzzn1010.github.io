import { Box, Heading } from '@chakra-ui/react';
import PostBody from '../../components/Post/PostBody';

import Post from '../../interfaces/Post.interface';
import markdownToHtml from '../../lib/markdownToHtml';
import { getAllPosts, getPostBySlug } from '../../lib/posts.api';

export interface IPostDetailPageParams {
  post: Post;
}

const PostDetailPage = ({ post }: IPostDetailPageParams) => {
  return (
    <Box>
      <Heading>{post.title}</Heading>
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
  const post = getPostBySlug(params.postSlug, ['title']);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
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
