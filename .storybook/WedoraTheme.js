import { create } from '@storybook/theming';
import wedora from './static/wedora.jpg';

export default create({
  base: 'light',

  colorPrimary: '#2C4154',
  colorSecondary: '#319B9D',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'white',
  barBg: '#2C4154',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Wedora Storybook',
  brandUrl: 'https://example.com',
  brandImage: wedora,
  brandTarget: '_self',
});
