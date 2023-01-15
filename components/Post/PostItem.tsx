import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
} from '@chakra-ui/react';
import Post from '../../interfaces/Post.interface';
import CustomLink from '../common/CustomLink/CustomLink';
import CustomTag from '../common/Tag/Tag';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Box my={4}>
      <Stack spacing={4}>
        <Card variant={'outline'}>
          <Box>{post.date}</Box>
          <CardHeader>
            <Heading size="lg">
              <Box>
                <CustomLink href="#">{post.title}</CustomLink>
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
