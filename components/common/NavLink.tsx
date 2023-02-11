import { Text, Link } from '@chakra-ui/react';
import { ReactNode } from 'react';
import CustomLink, { ICustomLinkProps } from './CustomLink';

export interface INavLinkProps extends ICustomLinkProps {
  children: ReactNode;
  fontSize?: string;
}

const NavLink = (props: INavLinkProps) => {
  const { children, href = '#', fontSize = '1.1rem', ...rest } = props;
  return (
    <Text size="md">
      <CustomLink
        px={2.5}
        py={2}
        rounded={'md'}
        href={href}
        color={'teal.500'}
        fontSize={fontSize}
        {...rest}
      >
        {children}
      </CustomLink>
    </Text>
  );
};
export default NavLink;
