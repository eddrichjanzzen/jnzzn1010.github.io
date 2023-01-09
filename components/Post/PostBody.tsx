import { Stack } from '@chakra-ui/react';

type PostBodyProps = {
  content: string;
};

const PostBody = ({ content }: PostBodyProps) => {
  return (
    <Stack>
      <div
        // className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Stack>
  );
};

export default PostBody;
