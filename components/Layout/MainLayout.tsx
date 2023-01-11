import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from './Footer';
import Header from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Box mx={{ base: '3%', md: '18%' }} mt={10} mb={32}>
          {children}
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
