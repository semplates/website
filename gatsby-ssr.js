import React, { Fragment } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './src/theme';
import CookieBanner from './src/components/Shared/CookieBanner';

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <Fragment>
      {element}
      <CookieBanner pageProps={props} />
    </Fragment>
  );
};
