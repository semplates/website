import React, { Fragment } from 'react';
import { background } from '../../../static';
import { Grid, styled } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';
import SEO from '../Shared/Seo';

const StyledMain = styled('div')(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'repeat-y',
}));

const GlassCanvas = styled('div')(({ theme }) => ({
  width: '100%',
  background: theme.custom.fadingGlassBackground,
  backdropFilter: theme.custom.thickBlur,
  webkitBackdropFilter: theme.custom.thinBlur,
  padding: theme.spacing(5, 0, 0, 0),
}));

const Layout = ({ children, hero, title, description, pathname }) => {
  // Define the meta title and description

  return (
    <Fragment>
      <SEO title={title} description={description} pathname={pathname} />
      <Header />
      <StyledMain>
        <GlassCanvas>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start">
            {hero}
            {children}
          </Grid>
        </GlassCanvas>
      </StyledMain>
      <Footer />
    </Fragment>
  );
};

export default Layout;
