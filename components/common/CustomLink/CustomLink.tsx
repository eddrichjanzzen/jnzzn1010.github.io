import NextLink from 'next/link';
import { Link, LinkProps } from '@chakra-ui/react';

export interface ICustomLinkProps extends LinkProps {
  href: string;
  title: string;
  external?: boolean;
}

const CustomLink = (props: ICustomLinkProps) => {
  const { href, title, color = 'teal.400', ...rest } = props;
  return (
    <NextLink href={href} passHref>
      <Link color={color} {...rest}>
        {title}
      </Link>
    </NextLink>
  );
};

export default CustomLink;
