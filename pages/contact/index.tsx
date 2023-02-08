import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useForm } from '@formspree/react';
import MailSuccess from '../../components/contact/MailSuccess';

const ContactPage = () => {
  const [state, handleSubmit] = useForm('myrezndx');
  const isError = state.errors.length > 1;

  if (state.succeeded) {
    return <MailSuccess />;
  }
  return (
    <Box>
      <Heading>Contact</Heading>
      <form method="POST" onSubmit={handleSubmit}>
        <Box pt={4}>
          <Grid
            templateAreas={`
                  "name email"
                  "message message"
                  "button button"
                  `}
            gridTemplateRows="0.5fr 1fr 0.5fr"
            gridTemplateColumns="repeat(2, 1fr)"
            gap="4"
          >
            <GridItem area="name" h="100%">
              <FormControl isInvalid={isError}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="John Doe"
                  id="name"
                  name="name"
                  isRequired
                />
              </FormControl>
            </GridItem>
            <GridItem area="email">
              <FormControl isInvalid={isError}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="test@mailbox.com"
                  id="email"
                  name="email"
                  isRequired
                />
              </FormControl>
            </GridItem>
            <GridItem area="message">
              <FormControl isInvalid={isError}>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Hi Janzzen..."
                  id="message"
                  name="message"
                  isRequired
                />
              </FormControl>
            </GridItem>
            <GridItem area="button">
              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                disabled={state.submitting}
                isLoading={state.submitting}
              >
                Submit
              </Button>
            </GridItem>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default ContactPage;
