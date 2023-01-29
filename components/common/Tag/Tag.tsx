import { Badge, BadgeProps } from '@chakra-ui/react';
import CustomLink from '../CustomLink/CustomLink';

interface ITagProps extends BadgeProps {
  title: string;
  colorScheme?: string;
  href: string;
}

const Tag = ({ title, colorScheme = 'gray', href = '#' }: ITagProps) => {
  return (
    <CustomLink href={href}>
      <Badge p={1.5} ml={1} colorScheme={colorScheme}>
        {title}
      </Badge>
    </CustomLink>
  );
};

export default Tag;
