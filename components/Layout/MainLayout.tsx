import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

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
