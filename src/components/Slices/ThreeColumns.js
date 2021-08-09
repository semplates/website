import React from 'react';
import { Box, Grid, Hidden, styled, Typography } from '@material-ui/core';
import { GridContainer, SecondaryButton, SliceTitle } from '../Shared';
import { money, product, template } from '../../../static';

export const ButtonContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(5),
  justifyContent: 'space-around',
  paddingTop: theme.spacing(5),
}));

const LargeGlassCard = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
  backgroundColor: theme.custom.glassBackground,
  borderRadius: theme.custom.borderRadius,
  border: theme.custom.glassBorder,
  borderRight: theme.custom.glassBorderRight,
  boxShadow: theme.custom.glassShadow,
  backdropFilter: theme.custom.thinBlur,
  webkitBackdropFilter: theme.custom.thinBlur,
  borderBottom: `${theme.custom.borderRadius} solid transparent`,
  transition: 'border 300ms ease-in-out',

  '@media (min-width: 1200px)': {
    margin: theme.spacing(0, 0, 6, 0),
    padding: theme.spacing(0, 4, 4, 4),
  },

  '&:hover': {
    borderBottom: `${theme.custom.borderRadius} solid ${theme.palette.primary.main}`,
    boxShadow: theme.custom.glassShadowHover,
  },
}));

const GlassCard = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.custom.glassBackground,
  borderRadius: theme.custom.borderRadius,
  border: theme.custom.glassBorder,
  borderBottom: theme.custom.glassBorderBottom,
  borderRight: theme.custom.glassBorderRight,
  boxShadow: theme.custom.glassShadow,
  backdropFilter: theme.custom.thinBlur,
  webkitBackdropFilter: theme.custom.thinBlur,
}));

const GlassCardIcon = styled('img')(({ theme }) => ({
  padding: theme.spacing(0, 2, 2, 2),
  maxWidth: '300px',
  width: '90%',

  '@media (min-width: 1280px)': {
    position: 'relative',
    top: '-50px',
    margin: theme.spacing(0, 0, -6, 0),
  },
}));

const GlassCardTextBox = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: theme.spacing(2, 0),
}));

const GlassCardTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));

const GlassCardText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));

const cardContent = [
  {
    icon: template,
    iconAlt: 'Build appealing SES email templates',
    title: 'Build appealing SES email templates',
    text: "With the integrated Semplates Template Editor it's foolproof to design, upload and maintain appealing amazon SES email templates.",
  },
  {
    icon: money,
    iconAlt: 'Save up to 90 percent in emailing costs',
    title: 'Save up to 90 percent in emailing costs',
    text: 'Sending emails with conventional emailing services like Mailchimp can be expensive, resulting in monthly four-digit bills. Using AWS SES and the Semplates Frontend to design and manage email templates, these costs can be cut by up to 90 percent.',
  },
  {
    icon: product,
    iconAlt: 'No coding skills required',
    title: 'No coding skills required',
    text: "Semplates gives product, marketing and design experts a no-code access to Amazon SES, so you don't need to tap your engineers precious resources to manage your email templates. Using the Semplates API your tech colleagues can then consume your email templates within your existing processes.",
  },
];

const ThreeColumns = () => {
  const FeatureCard = ({ cardItem }) => {
    return (
      <Grid item lg={4} md={12}>
        <Hidden mdDown>
          <LargeGlassCard>
            <GlassCardIcon
              src={cardItem.icon}
              alt={cardItem.iconAlt}
              title={cardItem.iconAlt}
            />
            <GlassCardTitle color={'primary'} variant={'h5'}>
              {cardItem.title}
            </GlassCardTitle>
            <GlassCardText color={'secondary'} variant={'h6'}>
              {cardItem.text}
            </GlassCardText>
          </LargeGlassCard>
        </Hidden>
        <Hidden lgUp>
          <GlassCard
            container
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}>
            <Grid item md={6}>
              <GlassCardIcon
                src={cardItem.icon}
                alt={cardItem.iconAlt}
                title={cardItem.iconAlt}
              />
            </Grid>
            <Grid item md={6}>
              <GlassCardTextBox>
                <GlassCardTitle color={'primary'} variant={'h5'}>
                  {cardItem.title}
                </GlassCardTitle>
                <GlassCardText color={'secondary'} variant={'h6'}>
                  {cardItem.text}
                </GlassCardText>
              </GlassCardTextBox>
            </Grid>
          </GlassCard>
        </Hidden>
      </Grid>
    );
  };

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
              'Semplates will help you to send transactional emails and email campaigns with SES more time and cost efficiently.'
            }>
            How our clients profit from Semplates
          </SliceTitle>
        </Grid>

        {cardContent.map((cardItem, index) => (
          <FeatureCard key={index} cardItem={cardItem} />
        ))}

        <Grid item xs={12}>
          <ButtonContainer>
            <SecondaryButton to={'/use-cases'}>
              Example use cases
            </SecondaryButton>
          </ButtonContainer>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default ThreeColumns;
