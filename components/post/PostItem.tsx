import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import Post from '../../interfaces/Post.interface';
import CustomLink from '../common/CustomLink';
import Tag from '../common/Tag';
import dayjs from 'dayjs';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  const formattedDate = dayjs(post.date).format('MMMM DD, YYYY');

  return (
    <Box my={4}>
      <Stack spacing={4}>
        <Card variant={'outline'}>
          <CardHeader pb={0}>
            <Text size="xs" fontWeight={400} color={'gray.500'}>
              {formattedDate}
            </Text>
            <Heading size="lg">
              <Box>
                <Box py={2}>
                  <CustomLink href={`/posts/${post.slug}`}>
                    {post.title}
                  </CustomLink>
                </Box>
                <Box>
                  {post.tags.map((tag) => {
                    return (
                      <Tag
                        title={tag}
                        key={tag}
                        ml={1}
                        href={`/posts/tag/${tag}`}
                      />
                    );
                  })}
                </Box>
              </Box>
            </Heading>
          </CardHeader>
          <CardBody>
            <Box>{post.description}</Box>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
};

export default PostItem;
