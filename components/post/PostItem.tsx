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
import CustomLink from '../common/CustomLink/CustomLink';
import CustomTag from '../common/Tag/Tag';
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
          <CardHeader>
            <Text size="sm" fontWeight={700} color={'gray.400'}>
              {formattedDate}
            </Text>
            <Heading size="lg">
              <Box>
                <CustomLink href={`posts/${post.slug}`}>
                  {post.title}
                </CustomLink>
                <Box>
                  {post.tags.map((tag) => {
                    return <CustomTag title={tag} key={tag} ml={1} />;
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
