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
      pre: {
        p: 4,
        rounded: 'md',
        bg: 'grey.100',
        color: 'inherit',
        overflow: 'auto',

        _dark: {
          bg: 'inherit',
        },

        code: {
          fontWeight: 'normal',

          '&::before, &::after': {
            content: '""',
          },
        },
      },
    },
  })
);

export default theme;
