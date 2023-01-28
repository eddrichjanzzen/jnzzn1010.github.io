import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

const theme = extendTheme(
  {
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
      Link: {
        baseStyle: {
          color: 'teal.500',
        },
      },
    },
  },
  withProse({
    baseStyle: {
      a: {
        color: 'teal.500',
      },
    },
  })
);

export default theme;
