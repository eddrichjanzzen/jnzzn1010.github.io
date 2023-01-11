import { Text, Link, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface INavLinkProps {
  children: ReactNode;
  href?: string;
}

const NavLink = ({ children, href = '#' }: INavLinkProps) => (
  <Text size="md">
    <Link
      px={2.5}
      py={1}
      rounded={'md'}
      href={href}
      color={'teal.500'}
      fontSize={'1.1em'}
    >
      {children}
    </Link>
  </Text>
);

export default NavLink;
