import React from 'react';
import { Grid, styled } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(10, 5, 0, 5),
  '@media (max-width: 600px)': {
    padding: theme.spacing(5, 3, 0, 3),
  },
}));

const GridContainer = ({ children }) => {
  return (
    <Grid item sm={10} xs={12}>
      <Container>{children}</Container>
    </Grid>
  );
};

export default GridContainer;
