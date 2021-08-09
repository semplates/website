import React from 'react';
import { Box, Grid, styled, Typography } from '@material-ui/core';
import { GridContainer, SliceTitle } from '../Shared';
import { confirmation, costEffective, startup } from '../../../static';

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(10),
}));

const StyledUseCase = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  transition: '0.3s',
  borderRadius: theme.custom.borderRadius,
  borderBottom: `${theme.custom.borderRadius} solid transparent`,

  '&:hover': {
    borderBottom: `${theme.custom.borderRadius} solid ${theme.palette.primary.main}`,
    boxShadow: theme.custom.glassShadowHover,
  },
}));

const UseCaseTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  padding: theme.spacing(0, 0, 2, 0),
}));

const UseCaseText = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  minHeight: '200px',
}));

const UseCaseIcon = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
}));

const useCases = [
  {
    customerGroup: 'Transactional email templates for digital startups',
    customerDescription:
      'Are you creating the next SaaS unicorn? With Semplates its super easy to setup appealing transactional emails such as confirmation, registration or password reset emails. You can then trigger emailing events from anywhere any place in your software architecture via our API or AWS SES. This is especially convenient, if you are using AWS services for your product anyway because Semplates integrates well in your existing cloud development processes.',
    image: startup,
    imageAlt: 'Semplates is ideal for startups',
  },
  {
    customerGroup: 'Cost-effective email campaigns for high-volume marketers',
    customerDescription:
      "High-volume email campaigns quickly get expensive. With AWS SES and Semplates you send emails for the fraction of the costs that conventional emailing services such as Mailchimp, Sendgrid, etc. Here is a comparison: Sending 100k emails per month with Semplates' Premium Plan + SES AWS will cost you 39$ compared to 590$ when using Mailchimp. That's a 93 percent reduction in monthly recurring costs!",
    image: costEffective,
    imageAlt: 'Semplates is cost effective',
  },
  {
    customerGroup: 'Mail communication for branded web experiences',
    customerDescription:
      "Successful brands turn to modern web frameworks and modular API–first system designs to leverage the business benefits of full individualization and branding capabilities. Semplates' API allows you to trigger email sending from anywhere in your front- or backend system. At the same time Semplates enables you to bring the same level of branding and customization to your email communication that your users value in your web experience. Easily add personalized, branded emails to your contact forms, community signups, newsletter registrations, payment confirmations or any other touchpoint along your users' journey.",
    image: confirmation,
    imageAlt: 'Semplates makes branding email experiences easy',
  },
];

const UseCasesSlice = ({ title, subTitle }) => {
  const UseCaseSlice = ({ useCaseItem }) => {
    return (
      <StyledUseCase
        item
        xl={4}
        lg={10}
        md={10}
        xs={12}
        key={useCaseItem.customerGroup}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}>
          <Grid item xs={12} md={7}>
            <UseCaseTitle color={'primary'} variant={'h5'}>
              {useCaseItem.customerGroup}
            </UseCaseTitle>
          </Grid>
          <Grid item xs={10} md={5}>
            <Box
              width="100%"
              height="100%"
              alignItems="center"
              justifyContent="center"
              display="flex">
              <UseCaseIcon
                src={useCaseItem.image}
                alt={useCaseItem.imageAlt}
                title={useCaseItem.imageAlt}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <UseCaseText variant={'h6'}>
              {useCaseItem.customerDescription}
            </UseCaseText>
          </Grid>
        </Grid>
      </StyledUseCase>
    );
  };

  return (
    <GridContainer>
      <StyledGrid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={5}>
        <Grid item sm={12}>
          <SliceTitle alignment={'center'} subTitle={subTitle}>
            {title}
          </SliceTitle>
        </Grid>

        {useCases.map(useCaseItem => (
          <UseCaseSlice
            useCaseItem={useCaseItem}
            key={useCaseItem.customerGroup}
          />
        ))}
      </StyledGrid>
    </GridContainer>
  );
};

export default UseCasesSlice;
