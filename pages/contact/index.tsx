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
  Center,
} from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <Box>
      <Heading>Contact</Heading>
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
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="John Doe" />
            </FormControl>
          </GridItem>
          <GridItem area="email">
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="test@mailbox.com" />
            </FormControl>
          </GridItem>
          <GridItem area="message">
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Hi Janzzen..." />
            </FormControl>
          </GridItem>
          <GridItem area="button">
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactPage;
