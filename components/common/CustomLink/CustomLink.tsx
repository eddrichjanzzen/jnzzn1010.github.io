import NextLink from 'next/link';
import { Link as CharkaLink, LinkProps } from '@chakra-ui/react';

export interface ICustomLinkProps extends LinkProps {
  href: string;
  external?: boolean;
}

const CustomLink = (props: ICustomLinkProps) => {
  const { href, children, color = 'teal.500' } = props;
  return (
    <NextLink href={href} passHref legacyBehavior>
      <CharkaLink color={color}>{children}</CharkaLink>
    </NextLink>
  );
};

export default CustomLink;
