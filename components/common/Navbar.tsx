import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import NavItems from '../constants/navbar.contants';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'right'}>
          <Flex alignItems={'center'}>
            {NavItems.map((navItem) => (
              <NavLink href={navItem.href} key={navItem.title}>
                {navItem.title}
              </NavLink>
            ))}
          </Flex>
        </Flex>
      </Box>
    </nav>
  );
};

export default Navbar;
