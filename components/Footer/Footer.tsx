import { Avatar, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import NavLink from '../Navbar/NavLink';

const Footer = () => {
  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        position={'fixed'}
        right={0}
        bottom={0}
        left={0}
        py={2}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          flexDir={'column'}
        >
          <Flex alignItems={'center'}>
            <NavLink>Home</NavLink>
            <NavLink>Posts</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Github</NavLink>
            <NavLink>Contact</NavLink>
          </Flex>
          <Flex justifyContent={'center'}>
            <Avatar name="Janzzen" src="/assets/images/me.jpg" />
          </Flex>
          <Flex justifyContent={'center'}>
            <Text>Developed by Eddrich Janzzen Ang powered by Next.js</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
