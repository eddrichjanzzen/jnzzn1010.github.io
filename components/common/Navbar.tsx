import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import NavItems from '../constants/navbar.contants';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex alignItems={'center'} justifyContent={'right'}>
          <Box mx={{ base: '5%', md: '18%', lg: '22%' }}>
            <Flex alignItems={'center'}>
              {NavItems.map((navItem) => (
                <NavLink
                  href={navItem.href}
                  key={navItem.title}
                  fontSize={'1.3rem'}
                  target={navItem?.target || ''}
                >
                  {navItem.title}
                </NavLink>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </nav>
  );
};

export default Navbar;
