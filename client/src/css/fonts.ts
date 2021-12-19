import { createGlobalStyle } from 'styled-components';

import UbuntuRegular from '../assets/fonts/Ubuntu-Regular.ttf';
import UbuntuItalic from '../assets/fonts/Ubuntu-Italic.ttf';

export const GlobalFontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu-Regular';
    src: url(${UbuntuRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Ubuntu-Italic';
    src: url(${UbuntuItalic}) format('truetype');
  }
`;