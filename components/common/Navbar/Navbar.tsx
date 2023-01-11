import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'right'}>
          <Flex alignItems={'center'}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="posts">Posts</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Github</NavLink>
            <NavLink>Contact</NavLink>
          </Flex>
        </Flex>
      </Box>
    </nav>
  );
};

export default Navbar;
