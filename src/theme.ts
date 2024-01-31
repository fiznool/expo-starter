import {createTheme} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#2B2B2B',
  white: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    textPrimary: palette.black,
  },
  spacing: {
    s: 4,
    m: 8,
    l: 12,
    xl: 16,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 24,
      lineHeight: 36,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
      color: 'textPrimary',
    },
  },
});

export type Theme = typeof theme;
export default theme;
