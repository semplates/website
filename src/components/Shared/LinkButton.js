import React from 'react';
import { Link } from './index';
import { Button, IconButton, styled } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 20,
  color: theme.palette.text.secondary,
  height: '45px',
  width: '260px',
  marginBottom: '5px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  boxShadow: theme.custom.buttonShadow,
}));

const StyledSecondaryButton = styled(Button)(({ theme }) => ({
  borderRadius: 20,
  height: '45px',
  width: '260px',
  marginBottom: '5px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  borderWidth: '2px',
  '&:hover': {
    borderWidth: '2px',
  },
}));

const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 40,
  height: '35px',
  width: '50px',
  marginBottom: '5px',
  overflow: 'hidden',
  borderWidth: '0px',
  backgroundColor: theme.custom.glassBackground,
  '&:hover': {
    backgroundColor: theme.custom.glassBackground,
    borderWidth: '0px',
  },
}));

const StyledLoginButton = styled(Button)(({ theme }) => ({
  borderRadius: 20,
  color: theme.palette.text.secondary,
  height: '30px',
  marginBottom: '5px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const StyledPlanButton = styled(Button)(({ theme }) => ({
  borderRadius: 20,
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.secondary.main,
  height: '35px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '250px',
  boxShadow: theme.custom.buttonShadow,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const StyledFooterButton = styled(Button)(({ theme }) => ({
  borderRadius: 20,
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.warning.main,
  height: '45px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '250px',
  boxShadow: 'rgba(0, 0, 0, 0.3) 4px 6px 15px',
  '&:hover': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.warning.light,
  },
}));

const PrimaryButton = ({ children, to, linktype, ...rest }) => {
  return (
    <Link to={to} linktype={linktype}>
      <StyledButton
        size="large"
        elevation={0}
        color="primary"
        variant="contained"
        {...rest}
        endIcon={<ArrowForwardIosIcon style={{ fontSize: 18 }} />}>
        {children}
      </StyledButton>
    </Link>
  );
};

const SecondaryButton = ({ children, to, linktype, ...rest }) => {
  return (
    <Link to={to} linktype={linktype}>
      <StyledSecondaryButton
        size="large"
        elevation={0}
        color="primary"
        variant="outlined"
        {...rest}
        endIcon={<ArrowForwardIosIcon style={{ fontSize: 18 }} />}>
        {children}
      </StyledSecondaryButton>
    </Link>
  );
};

const BurgerButton = ({ children, onClick }) => {
  return (
    <StyledMenuButton
      onClick={onClick}
      size="medium"
      elevation={0}
      color="primary"
      variant="outlined">
      {children}
    </StyledMenuButton>
  );
};

const LoginButton = ({ children, to, linktype }) => {
  return (
    <Link to={to} linktype={linktype}>
      <StyledLoginButton
        size="large"
        color="primary"
        disableElevation={true}
        variant="contained"
        endIcon={<ArrowForwardIosIcon style={{ fontSize: 18 }} />}>
        {children}
      </StyledLoginButton>
    </Link>
  );
};

const PlanButton = ({ children, to, linktype }) => {
  return (
    <Link to={to} linktype={linktype}>
      <StyledPlanButton
        size="large"
        variant="contained"
        endIcon={<ArrowForwardIosIcon style={{ fontSize: 18 }} />}>
        {children}
      </StyledPlanButton>
    </Link>
  );
};

const FooterButton = ({ children, to, linktype }) => {
  return (
    <Link to={to} linktype={linktype}>
      <StyledFooterButton size="large" variant="contained" elevation={7}>
        {children}
      </StyledFooterButton>
    </Link>
  );
};

export {
  BurgerButton,
  FooterButton,
  LoginButton,
  PlanButton,
  PrimaryButton,
  SecondaryButton,
};
