import NextLink from 'next/link';
import { Link as CharkaLink, LinkProps } from '@chakra-ui/react';

export interface ICustomLinkProps extends LinkProps {
  href: string;
  external?: boolean;
}

const CustomLink = (props: ICustomLinkProps) => {
  const { href, children, color = 'teal.500' } = props;
  // typecast to any to prevent issues with three/drei or three/fibre
  // https://zenn.dev/t4aru/scraps/3fee3b320bf125

  const propsAny = props as any;
  return (
    <NextLink href={href} passHref legacyBehavior>
      <CharkaLink color={color} {...propsAny}>
        {children}
      </CharkaLink>
    </NextLink>
  );
};

export default CustomLink;
