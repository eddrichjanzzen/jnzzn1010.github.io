import NextLink from 'next/link';
import { Button, ButtonProps } from '@chakra-ui/react';

export interface IButtonLinkProps extends ButtonProps {
  href: string;
  title: string;
  external?: boolean;
}

const ButtonLink = (props: IButtonLinkProps) => {
  const { href, title, external = false } = props;
  return (
    <NextLink href={href} passHref>
      <Button as="a" target={external ? '_blank' : '_self'}>
        {title}
      </Button>
    </NextLink>
  );
};

export default ButtonLink;
