import React from 'react';
import { Grid, styled } from '@material-ui/core';
import {
  GridContainer,
  PrimaryButton,
  SecondaryButton,
  SliceTitle,
} from '../Shared';
import { ButtonContainer } from './ThreeColumns';

const LastGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(10),
}));

const TrialPeriodTeaser = () => {
  return (
    <GridContainer>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={5}>
        <Grid item sm={12}>
          <SliceTitle
            subTitle={
              'Start your 28 days free trial today. No credit card required.'
            }>
            Sounds helpful to you? Try Semplates for free!
          </SliceTitle>
        </Grid>

        <LastGrid item xs={12}>
          <ButtonContainer>
            <PrimaryButton
              to={'https://app.semplates.io/register'}
              linktype={'outLink'}>
              Start your free trial
            </PrimaryButton>
            <SecondaryButton to={'/pricing'}>
              Compare pricing plans
            </SecondaryButton>
          </ButtonContainer>
        </LastGrid>
      </Grid>
    </GridContainer>
  );
};

export default TrialPeriodTeaser;
