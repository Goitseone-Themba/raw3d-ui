import type { Preview } from '@storybook/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.main};
  }
`;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
