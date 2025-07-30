import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      border: string;
      text: string;
      accent: string;
    };
    fonts: {
      main: string;
    };
    shadows: {
      light: string;
      medium: string;
      dark: string;
    };
  }
}
