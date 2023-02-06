import { Badge, BadgeProps } from '@chakra-ui/react';
import CustomLink from './CustomLink';

interface ITagProps extends BadgeProps {
  title: string;
  colorScheme?: string;
  href: string;
  variant?: string;
}

const Tag = ({
  title,
  colorScheme = 'gray',
  href = '#',
  variant = 'outline',
}: ITagProps) => {
  return (
    <CustomLink href={href}>
      <Badge p={1.5} ml={1} colorScheme={colorScheme} variant={variant}>
        {title}
      </Badge>
    </CustomLink>
  );
};

export default Tag;
