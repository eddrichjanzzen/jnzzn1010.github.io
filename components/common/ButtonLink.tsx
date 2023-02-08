import NextLink from 'next/link';
import { Button, ButtonProps } from '@chakra-ui/react';

export interface IButtonLinkProps extends ButtonProps {
  href: string;
  title: string;
  external?: boolean;
}

const ButtonLink = (props: IButtonLinkProps) => {
  const { href, title, external = false, colorScheme } = props;
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Button
        as="a"
        target={external ? '_blank' : '_self'}
        colorScheme={colorScheme}
      >
        {title}
      </Button>
    </NextLink>
  );
};

export default ButtonLink;
