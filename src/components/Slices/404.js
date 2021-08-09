import React from 'react';
import { Grid, styled } from '@material-ui/core';
import { GridContainer, PrimaryButton, SliceTitle } from '../Shared';
import { ButtonContainer } from './ThreeColumns';
import { pageNotFound } from '../../../static';

const LastGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(10),
}));

const PageNotFound = styled('img')({
  width: '100%',
});

const PageNotFoundSlice = ({ title, subTitle }) => {
  return (
    <GridContainer>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={5}>
        <Grid item sm={12}>
          <SliceTitle subTitle={subTitle}>{title}</SliceTitle>
        </Grid>

        <Grid item xs={12} md={8}>
          <ButtonContainer>
            <PrimaryButton to={'/'}>Go home</PrimaryButton>
          </ButtonContainer>
        </Grid>

        <LastGrid item xs={12}>
          <PageNotFound src={pageNotFound} />
        </LastGrid>
      </Grid>
    </GridContainer>
  );
};

export default PageNotFoundSlice;
