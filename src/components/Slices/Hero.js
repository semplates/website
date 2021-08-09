import React from 'react';
import { Grid, styled, Typography, useTheme } from '@material-ui/core';
import { GridContainer, PrimaryButton } from '../Shared';
import { heroImage } from '../../../static';
import ReactRotatingText from 'react-rotating-text';
import Box from '@material-ui/core/Box';

const TextBox = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  minHeight: '550px',
  padding: theme.spacing(5, 0, 0, 0)

}));

const StyledSubTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(6, 0)
}));

const HeaderImage = styled('img')({
  width: '90%',
});

const Hero = () => {
  const theme = useTheme();

  const claimWords = ['Create', 'Edit', 'Manage'];
  const claimText = 'email templates on AWS SES with ease.';
  const subClaim = 'Style your SES templates  in the drag-and-drop editor. Add placeholders for personalized emails. Then send your emails for a fraction of the costs of conventional emailing services.';

  return (
    <GridContainer>
      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="stretch">
        <Grid item lg={7} md={12} sm={12}>
          <TextBox>
            <Box alignItems="left">
              <Typography color={'secondary'} variant={'h1'}>
                <ReactRotatingText
                  items={ claimWords }
                  emptyPause={0}
                  pause={2000}
                  color={theme.palette.primary.main}
                />
                <br />
                { claimText }
              </Typography>
            </Box>
            <Box alignItems="flex-end" justifyContent="flex-start">
              <StyledSubTitle color={'secondary'} variant={'h2'}>
                { subClaim }
              </StyledSubTitle>
              <PrimaryButton
                to={'https://app.semplates.io/register'}
                linktype={'outLink'}>
                Get started
              </PrimaryButton>
            </Box>
          </TextBox>
        </Grid>
        <Grid
          item
          lg={5}
          md={8}
          sm={10}
          xs={10}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}>
          <HeaderImage
            src={heroImage}
            alt="Create & send beautiful email templates in no time with Semplates."
            title="Create & send beautiful email templates in no time with Semplates."
          />
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default Hero;
