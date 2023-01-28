import '../styles/globals.css';
import 'prismjs/themes/prism.min.css';
import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '../components/layout/MainLayout';
import theme from '../theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
