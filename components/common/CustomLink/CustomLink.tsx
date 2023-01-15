import NextLink from 'next/link';
import { Link as CharkaLink, LinkProps } from '@chakra-ui/react';

export interface ICustomLinkProps extends LinkProps {
  href: string;
  external?: boolean;
}

const CustomLink = (props: ICustomLinkProps) => {
  const { href, children, color = 'teal.400', ...rest } = props;
  return (
    <NextLink href={href} passHref legacyBehavior>
      <CharkaLink color={color} {...rest}>
        {children}
      </CharkaLink>
    </NextLink>
  );
};

export default CustomLink;
