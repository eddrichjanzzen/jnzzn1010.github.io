import { Box, useBreakpointValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from '../common/Navbar';
import Footer from './Footer';
import Header from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Header />
      {!isMobile && <Navbar />}
      <main>
        <Box mx={{ base: '5%', md: '18%', lg: '22%' }} pt={8} pb={48}>
          {children}
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
