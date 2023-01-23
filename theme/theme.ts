import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  components: {
    Text: {
      baseStyle: {
        color: 'gray.600',
      },
    },
  },
});

export default theme;
