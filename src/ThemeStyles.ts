import { createGlobalStyle } from 'styled-components';
import { MD_MAX_CONTENT_WIDTH } from 'core';

import gilroyLightWoff from 'ui/assets/fonts/Gilroy-Light.woff';
import gilroyLightWoff2 from 'ui/assets/fonts/Gilroy-Light.woff2';
import gilroyLightTtf from 'ui/assets/fonts/Gilroy-Light.ttf';

import gilroyUltraLightWoff from 'ui/assets/fonts/Gilroy-UltraLight.woff';
import gilroyUltraLightWoff2 from 'ui/assets/fonts/Gilroy-UltraLight.woff2';
import gilroyUltraLightTtf from 'ui/assets/fonts/Gilroy-UltraLight.ttf';

import gilroyRegularWoff from 'ui/assets/fonts/Gilroy-Regular.woff';
import gilroyRegularWoff2 from 'ui/assets/fonts/Gilroy-Regular.woff2';
import gilroyRegularTtf from 'ui/assets/fonts/Gilroy-Regular.ttf';

import gilroyMediumWoff from 'ui/assets/fonts/Gilroy-Medium.woff';
import gilroyMediumWoff2 from 'ui/assets/fonts/Gilroy-Medium.woff2';
import gilroyMediumTtf from 'ui/assets/fonts/Gilroy-Medium.ttf';

import gilroyBoldWoff from 'ui/assets/fonts/Gilroy-Bold.woff';
import gilroyBoldWoff2 from 'ui/assets/fonts/Gilroy-Bold.woff2';
import gilroyBoldTtf from 'ui/assets/fonts/Gilroy-Bold.ttf';

import gilroyBlackWoff from 'ui/assets/fonts/Gilroy-Black.woff';
import gilroyBlackWoff2 from 'ui/assets/fonts/Gilroy-Black.woff2';
import gilroyBlackTtf from 'ui/assets/fonts/Gilroy-Black.ttf';


export const ThemeStyles = createGlobalStyle`
  :root {
    --font-family: 'gilroy', 'Trebuchet MS', 'Tahoma', 'Arial', 'sans-serif';
    --font: normal 500 16px/1.44 var(--font-family);
    --color-primary-1: rgb(49, 114, 253);
    --color-primary-1-tint-1: rgb(0, 22, 69);
    --color-primary-1-tint-2: rgb(40, 103, 239, .08);
    --color-disabled: rgba(14,14,14,.3);
    --color-secondary-1: rgb(31, 31, 31);
    --color-secondary-1-tint-1: rgba(14,14,14,.3);
    --color-positive: #00d241;
    --color-negative: #ea4242;
  }

  body {
    font: var(--font);
    color: var(--color-secondary);
    letter-spacing: 0.5px;
  }

  *:before, &:after {
    color: var(--color-secondary);
  }

  h1 {
    font-size: 38px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: .5px;
    white-space: nowrap;
    max-width: ${MD_MAX_CONTENT_WIDTH}px;
    margin: 0 auto 20px;;
    color: var(--color-primary-1-tint-1);
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.22px;
    margin-bottom: 20px;
    white-space: nowrap;
    color: var(--color-primary-1-tint-1);
    &.centered {
        text-align: center;
        font-weight: 600;
    }
  }

  h3 {
    font-size: 17px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
    white-space: nowrap;
    color: var(--color-primary-1-tint-1);
  }

  .section-1 {
    height: auto;
    max-width: ${MD_MAX_CONTENT_WIDTH}px;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 0 11px 30px 0 rgba(0, 0, 0, 0.03);
    padding: 40px 40px 60px;
    background: #fff;
  }

  .section-2 {
    &:not(:last-of-type) {
        margin-bottom: 40px;
    }
  }

  section.section-1,
  section.section-2 {
    &.no-offset {
        margin-bottom: unset;
    }
    &.no-padding {
        padding: unset;
    }
  }

  p, pre, a, li, input, textarea, text, select, option {
    font-weight: 500;
    font-size: 16px;
  }

  a {
      &.styled {
        color: var(--color-primary-1);
        text-decoration: underline;
      }
  }

  input, button, textarea, pre {
    font: var(--font);
    letter-spacing: 0.6px;
  }

  input[type="password"] {
    font: small-caption;
    font-size: 21px;
    letter-spacing: 2px;
  }

  input::placeholder, textarea::placeholder {
    color: rgb(31, 31, 31, .5);
    letter-spacing: 0.5px;
  }

  @font-face {
        font-family: 'gilroy';
        src: url(${gilroyUltraLightWoff}) format('woff2'),
            url(${gilroyUltraLightWoff2}) format('woff'),
            url(${gilroyUltraLightTtf}) format('truetype');
        font-weight: 200;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'gilroy';
        src: url(${gilroyLightWoff}) format('woff2'),
            url(${gilroyLightWoff2}) format('woff'),
            url(${gilroyLightTtf}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'gilroy';
        src: url(${gilroyRegularWoff}) format('woff2'),
            url(${gilroyRegularWoff2}) format('woff'),
            url(${gilroyRegularTtf}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'gilroy';
        src: url(${gilroyMediumWoff}) format('woff2'),
            url(${gilroyMediumWoff2}) format('woff'),
            url(${gilroyMediumTtf}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'gilroy';
        src: url(${gilroyBoldWoff}) format('woff2'),
            url(${gilroyBoldWoff2}) format('woff'),
            url(${gilroyBoldTtf}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'gilroy';
        src: url(${gilroyBlackWoff}) format('woff2'),
            url(${gilroyBlackWoff2}) format('woff'),
            url(${gilroyBlackTtf}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
`;
