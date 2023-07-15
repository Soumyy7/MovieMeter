import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  fontFamily: 'Bebas Neue, sans-serif',
  mainColors: {
    blue: '#fff5d7',
    gray: '#ff5e6c',
    dark: '#feb300',
    Tan: '#e1b382',
    Shadow: '#c89666',
    DeepBlue: '#2d545e',
    BlueShadow: '#12343b',
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 18px;
    margin: 0;
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #2d545e;
  }
`;

export const GlobalTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
