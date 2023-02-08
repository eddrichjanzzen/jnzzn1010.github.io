import { Text, Link } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface INavLinkProps {
  children: ReactNode;
  href?: string;
  fontSize?: string;
}

const NavLink = ({
  children,
  href = '#',
  fontSize = '1.1rem',
}: INavLinkProps) => (
  <Text size="md">
    <Link
      px={2.5}
      py={2}
      rounded={'md'}
      href={href}
      color={'teal.500'}
      fontSize={fontSize}
    >
      {children}
    </Link>
  </Text>
);

export default NavLink;
