import React from 'react';
import { Box, Grid, styled, Typography } from '@material-ui/core';
import {
  screenshotImport,
  screenshotEditor,
  screenshotTemplates,
  screenshotStarters,
} from '../../../static';
import { SecondaryButton, SliceTitle } from '../Shared';

export const FullWidthContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: theme.spacing(20, 0, 0, 0),
  padding: theme.spacing(2, 0),
}));

const FeatureGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(8, 0, 8, 0),
}));

const FullWidthTitleGrid = styled(Grid)(({ theme }) => ({
  '@media (min-width: 960px)': {
    padding: theme.spacing(0, 5),
  },
}));

const TextBox = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  width: '100%',
  margin: theme.spacing(0, 4),
  '@media (max-width: 960px)': {
    margin: theme.spacing(0, 1),
  },
  '@media (max-width: 600px)': {
    margin: theme.spacing(0),
  },
}));

const BoxTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(0, 0, 3, 0),
}));

const ScreenshotBox = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '106%',
  boxShadow: theme.custom.wideShadow,
}));

const ButtonContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(5),
  justifyContent: 'flex-start',
  paddingTop: theme.spacing(5),
  '@media (max-width: 1200px)': {
    justifyContent: 'center',
  },
}));

const featuresContent = [
  {
    screenshot: screenshotEditor,
    screenshotAlt:
      'The Semplates Templates Editor makes email templates design easy.',
    position: 'right',
    title: 'Easily edit SES email templates',
    text: 'Design engaging and responsive email templates that carry your brand. Our drag-and-drop templates editor allows you to integrate images, links or pure HTML easily so you can create vivid reading experiences. You can also use placeholders to send personalized email content.',
    to: '/features',
    label: 'See all features',
  },
  {
    screenshot: screenshotTemplates,
    screenshotAlt:
      'The Semplates Templates Manager makes email templates organization easy.',
    position: 'left',
    title: 'Organize AWS SES email templates',
    text: 'Design new email templates from scratch. Duplicate existing templates or import email templates directly from your SES account. Create and attach tags to organize your SES email templates. Quickly search, filter and sort through all your email templates. Work collaboratively with your teammates on your email templates.',
    to: '/features',
    label: 'See all features',
  },
  {
    screenshot: screenshotImport,
    screenshotAlt:
      'Semplates SES Import makes importing your existing email templates from SES easy.',
    position: 'right',
    title: 'Import your SES email templates',
    text: "Import your existing email templates from SES with Semplates' Template Import functionality. Doing so allows you to manage all your existing email templates visually in one place with Semplates. Never ask your developers again to pull some template from SES, but import your email templates directly via Semplates.",
    to: '/features',
    label: 'See all features',
  },
  {
    screenshot: screenshotStarters,
    screenshotAlt:
      'Semplates SES Template Starters gives you powerful SES template designs to start with.',
    position: 'left',
    title: 'Use powerful SES email template starters',
    text: 'Accelerate your design process by starting from one of our Amazon SES email template starters. Simply modify colors, fonts and forms to make our template starters fit to your corporate branding or design guidelines. Our starters make designing powerful branded AWS SES email templates easy.',
    to: '/features',
    label: 'See all features',
  },
];

const FeaturesTeaser = () => {
  const FeatureSlice = ({ feature }) => {
    return (
      <FeatureGrid item md={10} sm={9} xs={10}>
        <Grid
          container
          justifyContent={'flex-start'}
          alignItems={'center'}
          spacing={8}
          direction={feature.position === 'right' ? 'row' : 'row-reverse'}>
          <TextBox item md={5}>
            <BoxTitle variant={'h5'} color={'primary'}>
              {feature.title}
            </BoxTitle>
            <Typography variant={'h6'} color={'secondary'}>
              {feature.text}
            </Typography>
            <ButtonContainer>
              <SecondaryButton to={feature.to}>{feature.label}</SecondaryButton>
            </ButtonContainer>
          </TextBox>
          <ScreenshotBox item md={6}>
            <StyledImage
              src={feature.screenshot}
              alt={feature.screenshotAlt}
              title={feature.screenshotAlt}
            />
          </ScreenshotBox>
        </Grid>
      </FeatureGrid>
    );
  };

  return (
    <FullWidthContainer>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={0}>
        <FullWidthTitleGrid item lg={10} sm={9} xs={10}>
          <SliceTitle
            subTitle={
              'Use Semplates to ease your workflow for transactional emailing and emailing campaigns.'
            }>
            Features that will save you efforts
            <br />
            ... and hours.
          </SliceTitle>
        </FullWidthTitleGrid>

        {featuresContent.map((feature, index) => (
          <FeatureSlice key={index} feature={feature} />
        ))}
      </Grid>
    </FullWidthContainer>
  );
};

export default FeaturesTeaser;
