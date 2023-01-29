import { Box, Heading } from '@chakra-ui/react';
import PostItem from '../../../components/post/PostItem';
import Post from '../../../interfaces/Post.interface';
import { getAllPosts, getAllPostsByTag } from '../../../lib/posts.api';
import { capitalize } from '../../../util/capitalize';

type PostPageProps = {
  posts: Post[];
  postTag: string;
};

const PostTagPage = ({ posts, postTag }: PostPageProps) => {
  return (
    <Box>
      <Heading variant={'h1'}>{capitalize(postTag)}</Heading>
      <Box mt={4}>
        {posts.map((post) => (
          <PostItem post={post} key={post.title} />
        ))}
      </Box>
    </Box>
  );
};

type Params = {
  params: PostPageProps;
};

export const getStaticProps = async ({ params }: Params) => {
  const posts = getAllPostsByTag(
    [
      'title',
      'layout',
      'author',
      'date',
      'category',
      'tags',
      'description',
      'content',
      'slug',
    ],
    params.postTag
  );

  return {
    props: {
      posts,
      postTag: params.postTag,
    },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts(['tags']);

  const tags = new Set(posts.flatMap((post) => post.tags));

  return {
    paths: Array.from(tags).map((tag) => {
      return {
        params: {
          postTag: tag,
        },
      };
    }),
    fallback: false,
  };
}

export default PostTagPage;
