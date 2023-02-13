import { Box, Heading } from '@chakra-ui/react';
import markdownToHtml from '../../../lib/markdownToHtml';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../../next-seo.config';
import CodingProblem from '../../../interfaces/CodingProblem.interface';
import { getAllUVAProblems, getUVABySlug } from '../../../lib/uva.api';
import Markdown from '../../../components/common/Markdown';
import BackToPageLayout from '../../../components/layout/BackToPageLayout';

export interface IUVADetailPageProps {
  codingProblem: CodingProblem;
}

const UVADetailPage = ({ codingProblem }: IUVADetailPageProps) => {
  const blogUrl = `${NEXT_SEO_DEFAULT.openGraph.url}/coding-problems/uva/${codingProblem.slug}`;
  return (
    <BackToPageLayout
      href={'/coding-problems/uva'}
      linkTitle={'[Back to Listing Page]'}
    >
      <NextSeo
        title={codingProblem.title}
        description={codingProblem.title}
        canonical={blogUrl}
        openGraph={{
          type: 'article',
          article: {
            authors: ['Janzzen'],
          },
          url: blogUrl,
          site_name: NEXT_SEO_DEFAULT.openGraph.siteName,
          description: codingProblem.title,
        }}
      />
      <ArticleJsonLd
        useAppDir={true}
        type="BlogPosting"
        url={blogUrl}
        title={codingProblem.title}
        images={[]}
        datePublished={new Date().toISOString()}
        dateModified={new Date().toISOString()}
        authorName={'Janzzen'}
        description={codingProblem.title}
      />
      <Box display="flex" flexDir="row">
        <Heading>{`${codingProblem['problem-code']}: `}</Heading>
        <Heading ml={1} mb={4} variant="h1" color={'teal.400'}>
          {codingProblem.title}
        </Heading>
      </Box>
      <Markdown markdown={codingProblem.content} />
    </BackToPageLayout>
  );
};

type Params = {
  params: {
    uvaSlug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const uvaProblem = getUVABySlug(params.uvaSlug, [
    'title',
    'content',
    'slug',
    'problem-code',
  ]);

  const content = await markdownToHtml(uvaProblem.content);

  return {
    props: {
      codingProblem: {
        ...uvaProblem,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const uvaProblems = getAllUVAProblems(['slug']);

  console.log(uvaProblems);

  return {
    paths: uvaProblems.map((problems) => {
      return {
        params: {
          uvaSlug: problems.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default UVADetailPage;
