import { Badge, BadgeProps } from '@chakra-ui/react';

interface ITagProps extends BadgeProps {
  title: string;
}

const Tag = ({ title, colorScheme = 'gray', ...props }: ITagProps) => {
  return (
    <Badge ml={1} colorScheme={colorScheme} {...props}>
      {title}
    </Badge>
  );
};

export default Tag;
