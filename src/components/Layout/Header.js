import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Grid,
  Hidden,
  Popover,
  styled,
  Typography,
  useTheme,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { semplatesLogoBlue } from '../../../static';
import { BurgerButton, Link, LoginButton } from '../Shared';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: theme.custom.headerHeight,
  padding: theme.spacing(2, 5),
  backgroundColor: 'transparent',
  '@media (max-width: 600px)': {
    padding: theme.spacing(2, 3),
  },
}));

const RootContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
});

const BrandContainer = styled('div')({
  display: 'flex',
  height: '100%',
  flexDirection: 'row',
  alignItems: 'center',
});

const Logo = styled('img')({
  height: '35px',
});

const LinksContainer = styled('div')({
  display: 'flex',
  height: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justfiyContent: 'flex-end',
});

const StyledSemplates = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: 600,
  fontFamily: 'Montserrat',
  textTransform: 'uppercase',
  paddingBottom: '5px',
});

const MargedButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 4, 0, 0),
  height: '40px',
  backgroundColor: 'transparent',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  fontWeight: '500',
  '&:hover': {
    //you want this to be the same as the backgroundColor above
    backgroundColor: 'transparent',
  },
}));

const StyledPopover = styled(Popover)(({ theme }) => ({
  margin: theme.spacing(-5, 0, 0, 0),
}));

const StyledPopoverMenu = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
  margin: theme.spacing(2, 4, 2, 4),
}));

const PopoverCloseButton = styled('div')({
  position: 'absolute',
  top: '5px',
  right: '6px',
});

const LinkContainer = styled('div')({
  width: '100%',
  height: '100%',
});

const menuLinks = [
  {
    to: '/features',
    label: 'Features',
    linktype: 'innerLink',
  },
  {
    to: '/use-cases',
    label: 'Use Cases',
    linktype: 'innerLink',
  },
  {
    to: '/pricing',
    label: 'pricing',
    linktype: 'innerLink',
  },
  {
    to: 'https://semplates.tawk.help',
    label: 'Documentation',
    linktype: 'outLink',
  },
  {
    to: 'https://app.semplates.io/login',
    label: 'Log In',
    linktype: 'outLink',
  },
];

const SubMenu = ({ handlePopoverClose }) => {
  return (
    <StyledPopoverMenu>
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        spacing={0}>
        <Grid item xs={12} sm={4} md={3}>
          <Link to={menuLinks[0].to}>
            <LinkContainer>
              <MargedButton
                size="large"
                color="primary"
                linktype={menuLinks[0].linktype}>
                {menuLinks[0].label}
              </MargedButton>
            </LinkContainer>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Link to={menuLinks[1].to}>
            <LinkContainer>
              <MargedButton
                size="large"
                color="primary"
                linktype={menuLinks[1].linktype}>
                {menuLinks[1].label}
              </MargedButton>
            </LinkContainer>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Link to={menuLinks[2].to}>
            <LinkContainer>
              <MargedButton
                size="large"
                color="primary"
                linktype={menuLinks[2].linktype}>
                {menuLinks[2].label}
              </MargedButton>
            </LinkContainer>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Link to={menuLinks[3].to}>
            <LinkContainer>
              <MargedButton
                size="large"
                color="primary"
                linktype={menuLinks[3].linktype}>
                {menuLinks[3].label}
              </MargedButton>
            </LinkContainer>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <LinkContainer>
            <LoginButton linktype={menuLinks[4].linktype} to={menuLinks[4].to}>
              {menuLinks[4].label}
            </LoginButton>
          </LinkContainer>
        </Grid>
      </Grid>

      <PopoverCloseButton>
        <BurgerButton onClick={handlePopoverClose}>
          <CloseIcon color="primary" size={20} />
        </BurgerButton>
      </PopoverCloseButton>
    </StyledPopoverMenu>
  );
};

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const theme = useTheme();
  return (
    <header>
      <StyledAppBar position="absolute" elevation={0}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start">
          <Grid item sm={10} xs={12}>
            <RootContainer>
              <BrandContainer>
                <Link to="/">
                  <Logo src={semplatesLogoBlue} alt={'Semplates Logo'} />
                </Link>
                <Link to="/">
                  <MargedButton
                    size="large"
                    disableFocusRipple={true}
                    disableTouchRipple={true}
                    color="primary">
                    <StyledSemplates>SEMPLATES</StyledSemplates>
                  </MargedButton>
                </Link>
              </BrandContainer>
              <Hidden mdDown>
                <LinksContainer>
                  <Link to={menuLinks[0].to}>
                    <MargedButton
                      size="large"
                      color="primary"
                      linktype={menuLinks[0].linktype}>
                      {menuLinks[0].label}
                    </MargedButton>
                  </Link>
                  <Link to={menuLinks[1].to}>
                    <MargedButton
                      size="large"
                      color="primary"
                      linktype={menuLinks[1].linktype}>
                      {menuLinks[1].label}
                    </MargedButton>
                  </Link>
                  <Link to={menuLinks[2].to}>
                    <MargedButton
                      size="large"
                      color="primary"
                      linktype={menuLinks[2].linktype}>
                      {menuLinks[2].label}
                    </MargedButton>
                  </Link>
                  <Link to={menuLinks[3].to}>
                    <MargedButton
                      size="large"
                      color="primary"
                      linktype={menuLinks[3].linktype}>
                      {menuLinks[3].label}
                    </MargedButton>
                  </Link>
                  <LoginButton
                    linktype={menuLinks[4].linktype}
                    to={menuLinks[4].to}>
                    {menuLinks[4].label}
                  </LoginButton>
                </LinksContainer>
              </Hidden>
              <Hidden lgUp>
                <BurgerButton onClick={handlePopoverOpen}>
                  <MenuIcon color="primary" size={20} />
                </BurgerButton>
              </Hidden>
            </RootContainer>
          </Grid>
        </Grid>
      </StyledAppBar>
      <StyledPopover
        PaperProps={{
          style: {
            backgroundColor: theme.custom.glassBackground,
            boxShadow: theme.custom.glassBorder,
            backdropFilter: theme.custom.menuBlur,
            webkitBackdropFilter: theme.custom.menuBlur,
            borderRadius: '25px',
          },
        }}
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        elevation={15}
        onClose={handlePopoverClose}
        disableScrollLock={false}
        disableRestoreFocus>
        <SubMenu handlePopoverClose={handlePopoverClose} />
      </StyledPopover>
    </header>
  );
};

export default Header;
