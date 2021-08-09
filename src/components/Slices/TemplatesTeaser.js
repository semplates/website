import React from 'react';
import { Box, Grid, styled, Typography } from '@material-ui/core';
import Slider from 'react-slick';
import { templates } from '../../../static/templates';
import { templatesTeaser } from '../../../static';

export const SliceTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(5),
  color: theme.palette.secondary.light,
}));

const FullWidthContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.custom.warningBackground,
  margin: theme.spacing(20, 0, 0, 0),
  padding: theme.spacing(4, 0),
}));

const TitleIconContainer = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const TitleIcon = styled('img')(({ theme }) => ({
  width: '90%',
  padding: theme.spacing(2),
  '@media (max-width: 960px)': {
    padding: theme.spacing(2, 8),
  },
  '@media (max-width: 600px)': {
    padding: theme.spacing(2),
  },
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
  padding: theme.spacing(5, 0, 0, 0),
}));

const TemplateContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(5),
}));

const TemplateImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '250px',
  boxShadow: theme.custom.wideShadow,
}));

const TemplatesSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    easing: 'easeIn',
    centerMode: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px',
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '50px',
        },
      },
    ],
  };

  return (
    <StyledSlider {...settings}>
      {templates.map((value, index) => {
        return (
          <TemplateContainer key={index}>
            <TemplateImage
              src={value}
              title={'Template Starter Example'}
              alt={'Template Starter Example'}
            />
          </TemplateContainer>
        );
      })}
    </StyledSlider>
  );
};

const TemplatesTeaser = () => {
  return (
    <FullWidthContainer>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch">
        <Grid item sm={10} xs={12}>
          <Grid
            container
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            direction={'row-reverse'}
            spacing={0}>
            <Grid item md={5} sm={12}>
              <TitleIconContainer>
                <TitleIcon
                  src={templatesTeaser}
                  title="Start with appealing email template starters."
                  alt="Start with appealing email template starters."
                />
              </TitleIconContainer>
            </Grid>
            <Grid item md={7} sm={12}>
              <SliceTitle variant={'h3'}>
                Appealing email template starters. <br />
                <Box style={{ fontWeight: 500 }}>
                  Ready to receive your branding.
                </Box>
              </SliceTitle>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={10} xs={12}>
          <TemplatesSlider />
        </Grid>
      </Grid>
    </FullWidthContainer>
  );
};

export default TemplatesTeaser;
