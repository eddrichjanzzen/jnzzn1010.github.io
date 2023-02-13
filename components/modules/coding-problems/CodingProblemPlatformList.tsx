import { ListItem, UnorderedList } from '@chakra-ui/layout';
import CustomLink from '../../common/CustomLink';
import CodingProblemPlatforms from '../../constants/coding-problems.contants';

const CodingProblemPlatformList = () => {
  return (
    <UnorderedList>
      {CodingProblemPlatforms.map(({ href, title }) => {
        return (
          <ListItem key={title}>
            <CustomLink href={href}>{title}</CustomLink>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

export default CodingProblemPlatformList;
