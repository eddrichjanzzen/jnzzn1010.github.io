import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import ButtonLink from '../../components/common/ButtonLink';

const MailSuccess = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box position="relative">
        <Image
          width="200"
          height="200"
          src="/assets/images/mail.svg"
          alt="mail"
        />
      </Box>
      <Box>
        <Heading>Thanks for reaching out!</Heading>
      </Box>
      <Box p={2}>
        <Text>Will try to get back to you as soon as I can.</Text>
      </Box>
      <Box mt={20}>
        <ButtonLink colorScheme="teal" title="Return Home" href="/" />
      </Box>
    </Box>
  );
};

export default MailSuccess;
