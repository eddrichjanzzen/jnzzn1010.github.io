import { Box, Heading, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import PostBody from '../../components/modules/post/PostBody';

import Post from '../../interfaces/Post.interface';
import markdownToHtml from '../../lib/markdownToHtml';
import { getAllPosts, getPostBySlug } from '../../lib/posts.api';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

export interface IPostDetailPageParams {
  post: Post;
}

const PostDetailPage = ({ post }: IPostDetailPageParams) => {
  const formattedDate = dayjs(post.date).format('MMMM DD, YYYY');
  const blogUrl = `${NEXT_SEO_DEFAULT.openGraph.url}/${post.slug}`;
  return (
    <Box>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={blogUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: post.date,
            modifiedTime: post.date,
            authors: [post.author],
            tags: post.tags,
          },
          url: blogUrl,
          site_name: NEXT_SEO_DEFAULT.openGraph.siteName,
          description: post.description,
        }}
      />
      <ArticleJsonLd
        useAppDir={true}
        type="BlogPosting"
        url={blogUrl}
        title={post.title}
        images={[]}
        datePublished={post.date}
        dateModified={post.date}
        authorName={post.author}
        description={post.description}
      />
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
    'slug',
  ]);

  const content = await markdownToHtml(post.content);

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
