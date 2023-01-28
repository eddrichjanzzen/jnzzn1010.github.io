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
        <Box mx={{ base: '3%', md: '18%', lg: '22%' }} pt={10} pb={32}>
          {children}
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
