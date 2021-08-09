import React from 'react';
import { Box, Grid, styled, Typography } from '@material-ui/core';
import { semplatesLogoWithoutCircle } from '../../../static';
import { FooterButton, Link } from '../Shared';

export const FullWidthContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.dark,
  padding: theme.spacing(10, 0, 0, 0),
  position: 'relative',
}));

const Paperplane = styled('img')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  left: 0,
  bottom: 0,

  '@media (max-width: 960px)': {
    display: 'none',
  },

  '@media (max-width: 1200px)': {
    height: '85%',
    bottom: theme.spacing(2),
  },
}));

const PaddedGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(0, 0, 4, 0),
  '@media (max-width: 960px)': {
    textAlign: 'center',
  },
}));

const ClaimTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2, 0, 2, 0),
  color: theme.palette.text.secondary,
}));

const ClaimSubTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2, 0, 2, 0),
  color: theme.palette.text.secondary,
}));

const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(5, 3),
  alignItems: 'center',

  '@media (max-width: 980px)': {
    padding: theme.spacing(0, 3, 5, 3),
    height: '100%',
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: theme.custom.footerTextWeight,
  fontSize: theme.custom.footerTextSize,
  margin: theme.spacing(2, 0),
  textWrap: 'no-wrap',
  width: '100%',
  textAlign: 'left',

  '@media (max-width: 960px)': {
    textAlign: 'center',
  },
}));

const FooterRow = styled(Grid)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[400]}`,

  '@media (max-width: 960px)': {
    textAlign: 'center',
  },
}));

const LegalLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

const Footer = () => {
  return (
    <FullWidthContainer>
      <Paperplane
        src={semplatesLogoWithoutCircle}
        alt={"Semplates' paper plane flying out."}
        title={"Semplates' paper plane"}
      />
      <Grid container justifyContent="center">
        <Grid item xs={11} md={4} lg={3} xl={2} />
        <PaddedGrid item xs={11} md={4} lg={5} xl={5}>
          <ClaimTitle variant={'h3'}>
            Create & send appealing email templates in no time with Semplates.
          </ClaimTitle>
          <ClaimSubTitle variant={'h4'}>
            Use AWS SES to its full extend without a single
            line of code.
          </ClaimSubTitle>
        </PaddedGrid>
        <Grid item xs={12} md={3} lg={3} xl={5}>
          <ButtonContainer>
            <FooterButton
              to={'https://app.semplates.io/register'}
              linktype={'outLink'}>
              Start your free trial
            </FooterButton>
          </ButtonContainer>
        </Grid>
        <Grid item xs={12} md={1} lg={1} />
      </Grid>
      <FooterRow container spacing={0}>
        <Grid item xs={12} md={4} lg={3} />
        <Grid item xs={12} md={4} lg={5}>
          <FooterText variant={'h6'}>
            Copyright &copy; 2021 Semplates
          </FooterText>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <LegalLinks>
            <Link to={'/data-privacy'}>
              <FooterText variant={'h6'}>Data Privacy </FooterText>
            </Link>
            <Box mx={2}>
              <FooterText variant={'h6'}> | </FooterText>
            </Box>
            <Link to={'/disclaimer'}>
              <FooterText variant={'h6'}>Disclaimer</FooterText>
            </Link>
          </LegalLinks>
        </Grid>
        <Grid item xs={false} md={1} lg={1} />
      </FooterRow>
    </FullWidthContainer>
  );
};

export default Footer;
