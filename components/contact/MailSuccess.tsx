import { Box, Heading, Text } from '@chakra-ui/react';
import ButtonLink from '../../components/common/ButtonLink';
import CustomImage from '../common/CustomImage';

const MailSuccess = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box position="relative">
        <CustomImage
          width={200}
          height={200}
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
