import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import CustomLink from '../../components/common/CustomLink';
import BackToPageLayout from '../../components/layout/BackToPageLayout';
import CodingProblemPlatformList from '../../components/modules/coding-problems/CodingProblemPlatformList';

const CodingProblemsPage = () => {
  return (
    <BackToPageLayout href="/posts" linkTitle="[Back to Posts]">
      <Heading mb={4}>Coding Problems</Heading>
      <Text>
        Here you can find a collection of some the programming problems I have
        solved. The solutions to these are solved from different platforms such
        as UVA. HackerRank, LeetCode, etc. They are solved using different
        programming languages such as Python, C++, and Java.
      </Text>
      <Box m={4}>
        <CodingProblemPlatformList />
      </Box>
    </BackToPageLayout>
  );
};

export default CodingProblemsPage;
