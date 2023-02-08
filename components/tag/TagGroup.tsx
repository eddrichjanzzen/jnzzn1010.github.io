import { Box, Heading } from '@chakra-ui/react';
import Tag from '../common/Tag';
import TagItems from '../constants/tag.contants';

const TagGroup = () => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Box
        display="flex"
        flexDirection="column"
        width={{ base: '100%', md: '50%', lg: '50%' }}
      >
        <Box>
          <Heading>Tags</Heading>
        </Box>
        <Box my={2}>
          {TagItems.map(({ title, href }) => {
            return (
              <Box my={1} display="inline-block" key={title}>
                <Tag title={title} href={`posts/tag/${href}`} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default TagGroup;
