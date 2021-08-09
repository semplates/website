import React, { Fragment } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './src/theme';
import './node_modules/slick-carousel/slick/slick.css';
import './node_modules/slick-carousel/slick/slick-theme.css';
import CookieBanner from './src/components/Shared/CookieBanner';

export const onInitialClientRender = () => {
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement('script'),
      s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6007199aa9a34e36b96e1bca/1esdrode7';
    s1.charSet = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
};

export const wrapRootElement = ({ element }) => {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Fragment>{element}</Fragment>
      </ThemeProvider>
    </Fragment>
  );
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <Fragment>
      {element}
      <CookieBanner pageProps={props} />
    </Fragment>
  );
};
