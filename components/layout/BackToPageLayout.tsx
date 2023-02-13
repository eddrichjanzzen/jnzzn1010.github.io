import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import CustomLink from '../common/CustomLink';

export interface IBackToPageLayoutProps {
  href?: string;
  linkTitle?: string;
  children: ReactNode;
}

const BackToPageLayout = ({
  href = '/',
  linkTitle = '[Back to Home]',
  children,
}: IBackToPageLayoutProps) => {
  return (
    <Box>
      {children}
      <Box textAlign="center" p={4}>
        <CustomLink href={href}>{linkTitle}</CustomLink>
      </Box>
    </Box>
  );
};

export default BackToPageLayout;
