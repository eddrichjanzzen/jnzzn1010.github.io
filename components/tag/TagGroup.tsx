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
        <Box p={2}>
          <Heading>Tags</Heading>
        </Box>
        <Box>
          {TagItems.map(({ title, href }) => {
            return (
              <Box m={1} display="inline-block">
                <Tag title={title} href={`posts/tag/${href}`} m={2} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default TagGroup;
