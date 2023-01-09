import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
} from '@chakra-ui/react';
import Post from '../../interfaces/Post.interface';
import PostBody from './PostBody';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Stack spacing={4}>
      <Card variant={'outline'}>
        <Box>{post.date}</Box>
        <CardHeader>
          <Heading size="md">{post.title}</Heading>
        </CardHeader>
        <CardBody>
          <Box>{post.description}</Box>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default PostItem;
