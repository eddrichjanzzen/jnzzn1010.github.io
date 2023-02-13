/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text } from '@chakra-ui/react';
import CustomLink from '../../../components/common/CustomLink';
import CodingProblemItem from '../../../components/modules/coding-problems/CodingProblemItem';
import CodingProblem from '../../../interfaces/CodingProblem.interface';
import { getAllUVAProblems } from '../../../lib/uva.api';

export interface ICodingProblemsPageProps {
  codingProblems: CodingProblem[];
}

const CodingProblemsPage = ({ codingProblems }: ICodingProblemsPageProps) => {
  return (
    <Box>
      <Box mb={4}>
        <Heading mb={2}>UVA Problems</Heading>
        <Text>
          <CustomLink href="https://onlinejudge.org/">
            UVA Online Judge
          </CustomLink>{' '}
          is a website that offers algorithmic problems to solve in various
          programming languages and evaluates the solutions submitted by users.
          It helps users improve their programming skills and track their
          progress. Here you can find a collection of some the programming
          problems I've solved in the UVA Platform. You may also view my uHunt
          statistics{' '}
          <CustomLink href="https://uhunt.onlinejudge.org/id/796740">
            here
          </CustomLink>
          .
        </Text>
      </Box>
      {codingProblems.map((codingProblem) => {
        return (
          <Box key={codingProblem.title}>
            <CodingProblemItem codingProblem={codingProblem} />
          </Box>
        );
      })}
    </Box>
  );
};

export default CodingProblemsPage;

export const getStaticProps = async () => {
  const codingProblems = getAllUVAProblems([
    'title',
    'category',
    'content',
    'slug',
    'problem-code',
  ]);

  return {
    props: { codingProblems },
  };
};
