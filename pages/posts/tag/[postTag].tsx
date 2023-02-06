import { Box, Button, Heading } from '@chakra-ui/react';
import ButtonLink from '../../../components/common/ButtonLink';
import PostList, { IPostPageProps } from '../../../components/post/PostList';
import { getAllPosts, getAllPostsByTag } from '../../../lib/posts.api';
import { capitalize } from '../../../util/capitalize';

export interface IPostTagPageProps extends IPostPageProps {
  postTag: string;
}

const PostTagPage = ({ posts, postTag }: IPostTagPageProps) => {
  return (
    <Box>
      <Box display="flex" justifyContent="flex-end">
        <ButtonLink title={'Show All'} href={'/posts'} />
      </Box>
      <Box>
        <Heading variant={'h1'}>{capitalize(postTag)}</Heading>
        <PostList posts={posts} />
      </Box>
    </Box>
  );
};

type Params = {
  params: IPostTagPageProps;
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
