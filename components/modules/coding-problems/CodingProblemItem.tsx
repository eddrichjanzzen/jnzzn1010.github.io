import { Heading, Text, Box } from '@chakra-ui/react';
import CodingProblem from '../../../interfaces/CodingProblem.interface';
import CustomLink from '../../common/CustomLink';

export interface ICodingProblemItemProps {
  codingProblem: CodingProblem;
}

const CodingProblemItem = ({ codingProblem }: ICodingProblemItemProps) => {
  return (
    <Box display="flex" flexDir="row" p={1.5}>
      <Heading as="h4" size="md">
        <CustomLink href={`/coding-problems/uva/${codingProblem.slug}`}>
          {codingProblem['problem-code']}
        </CustomLink>
      </Heading>
      <Text>{`- ${codingProblem.title}`}</Text>
    </Box>
  );
};

export default CodingProblemItem;
