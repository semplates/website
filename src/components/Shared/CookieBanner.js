import React, { useState } from 'react';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import {
  Button,
  Box,
  Grid,
  Popover,
  Slide,
  styled,
  Typography,
  useTheme,
} from '@material-ui/core';
import { Cookies } from 'react-cookie/es6';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledBox = styled(Box)(({ theme }) => ({
  maxWidth: '500px',
  padding: theme.spacing(3, 2),
  borderRadius: '30px',
  display: 'flex',
  flexFlow: 'column wrap',
  backgroundColor: theme.custom.glassBackground,
}));

const StyledLink = styled('a')(({ theme }) => ({
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.primary.main,
  textWrap: 'wrap',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const cookieTexts = {
  title: '🍪 Our Cookie Policy 🍪',
  text: 'We uses cookie technology to analyse the website traffic and page usage, improve the navigation experience and support our marketing efforts. If you click accept, you grant us permission to store cookies on your device for those purposes.',
  linkText: ' Read more in the data privacy section.',
  acceptAllButton: 'Accept all',
  acceptNecessaryButton: 'Only necessary',
};

const getExpirationDate = () => {
  const expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + 365 * 24 * 60 * 60 * 1000);
  return expireDate;
};

const CookieBanner = ({ pageProps }) => {
  const theme = useTheme();
  const cookies = new Cookies();
  const ANALYTICS_CONSENT = 'semplates-analytics-consent';
  const cookieValue = cookies.get(ANALYTICS_CONSENT);
  const [open, setOpen] = useState(!cookieValue);

  const acceptAll = () => {
    cookies.set(ANALYTICS_CONSENT, true, { expires: getExpirationDate() });
    initializeAndTrack(pageProps.location);
    setOpen(false);
  };

  return (
    <Popover
      PaperProps={{
        style: {
          margin: '0px 15px 0px 0px',
          backgroundColor: theme.custom.glassBackground,
          boxShadow: theme.custom.glassBorder,
          backdropFilter: theme.custom.menuBlur,
          webkitBackdropFilter: theme.custom.menuBlur,
          borderRadius: '25px',
        },
      }}
      disableScrollLock
      TransitionComponent={Transition}
      TransitionProps={{ timeout: 1500 }}
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      anchorReference="anchorPosition"
      anchorPosition={{
        top: 1200,
        left: 2500,
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}>
      <StyledBox>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">{cookieTexts.title}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1">
              {cookieTexts.text}
              <StyledLink href="/data-privacy" target="_blank">
                {cookieTexts.linkText}
              </StyledLink>
            </Typography>
          </Grid>

          <Grid item xs={5}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{
                color: theme.palette.text.secondary,
                borderRadius: 20,
                padding: '10px 15px',
              }}
              onClick={acceptAll}>
              {cookieTexts.acceptAllButton}
            </Button>
          </Grid>
          <Grid item xs={7}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              style={{ borderRadius: 20, padding: '10px 15px' }}
              onClick={() => setOpen(false)}>
              {cookieTexts.acceptNecessaryButton}
            </Button>
          </Grid>
        </Grid>
      </StyledBox>
    </Popover>
  );
};

export default CookieBanner;
