import React from 'react';
import { Grid, styled, Typography } from '@material-ui/core';
import { GridContainer, PlanButton, SliceTitle } from '../Shared';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(10),
}));

const PlanCard = styled('div')(({ theme }) => ({
  borderRadius: theme.custom.borderRadius,
  padding: theme.spacing(4),
  backgroundColor: theme.custom.glassBackground,
  border: theme.custom.glassBorder,
  borderBottom: theme.custom.glassBorderBottom,
  borderRight: theme.custom.glassBorderRight,
  boxShadow: theme.custom.glassShadow,
  backdropFilter: theme.custom.thinBlur,
  webkitBackdropFilter: theme.custom.thinBlur,
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

const PlanName = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0),
  fontSize: '1.5rem',
  fontWeight: 600,
}));

const PlanPrice = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(8, 0, 0, 0),
  fontSize: '2.4rem',
  fontWeight: 600,
}));

const PlanDuration = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 0, 8, 0),
  fontWeight: 400,
  fontSize: '1.1rem',
}));

const PlanDivider = styled('hr')(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderTop: `2px solid rgba(58, 80, 107, 0.7)`,
  borderRadius: '32px',
  minWidth: '260px',
  width: '100%',
}));

const PlanDescription = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 0, 8, 0),
  textAlign: 'center',
  fontSize: '1.1rem',
}));

const PlanFeaturesTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  textAlign: 'left',
  fontSize: '1.1rem',
  fontWeight: 600,
  width: '100%',
}));

const PlanFeatureRow = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'flex-start',
  padding: theme.spacing(1, 0),
}));

const PlanFeaturesIncluded = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 1),
  textAlign: 'left',
  fontSize: '1rem',
  fontWeight: 400,
  width: '100%',
}));

const PlanFeaturesExcluded = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  padding: theme.spacing(0, 0, 0, 1),
  textAlign: 'left',
  fontSize: '1rem',
  fontWeight: 400,
  width: '100%',
}));

const StyledUnchecked = styled(IndeterminateCheckBoxIcon)(({ theme }) => ({
  color: theme.palette.secondary.light,
}));

const PlanPricingDisclaimer = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  textAlign: 'left',
  fontSize: '0.9rem',
  fontWeight: 500,
  width: '100%',
}));

const plans = [
  {
    name: 'Trial',
    price: 'Free',
    duration: '28-day period',
    description:
      "Ideal to try out Semplates' capabilities and test it within your team's workflow. Upgrade your plan anytime within the trial period. No credit card required.",
    features: [
      '1 Team member',
      'Up to 5 templates',
      'Template starters',
    ],
    notIncluded: [
      'Sending analytics',
      'API access',
    ],
    pricingDisclaimer: false,
  },
  {
    name: 'Starter',
    price: '$14',
    duration: 'per month',
    description:
      'Ideal for solopreneurs, startups and small marketing teams. Additional features or quotas beyond the base volume can be purchased anytime if needed.',
    features: [
      '1 Team members*',
      'Up to 10 templates*',
      'Template Starters',
    ],
    notIncluded: ['Sending analytics','API access'],
    pricingDisclaimer: true,
  },
  {
    name: 'Premium',
    price: '$29',
    duration: 'per month',
    description:
      'Ideal for bigger teams, marketing experts and corporate customers. Additional features or quotas beyond the base volume can be purchased anytime if needed.',
    features: [
      '5 Team members*',
      'Up to 30 templates*',
      'Template Starters',
      'Sending analytics',
      'API access',
      'Premium customer support',
    ],
    notIncluded: [],
    pricingDisclaimer: true,
  },
];

const PricingSlice = ({ title, subTitle }) => {
  const PricingCard = ({ planItem }) => {
    return (
      <Grid item xs={12} sm={9} md={7} lg={4}>
        <PlanCard>
          <PlanName color={'secondary'} variant={'h6'}>
            {planItem.name}
          </PlanName>
          <PlanPrice color={'primary'} variant={'h5'}>
            {planItem.price}
          </PlanPrice>
          <PlanDuration color={'primary'} variant={'h6'}>
            {planItem.duration}
          </PlanDuration>
          <PlanButton
            linkType={'outLink'}
            to="https://app.semplates.io/register"
            style={{ height: '25px' }}>
            Get {planItem.name} plan
          </PlanButton>
          <PlanDivider />
          <PlanDescription color={'secondary'} variant={'h6'}>
            {planItem.description}
          </PlanDescription>
          <PlanFeaturesTitle color={'secondary'} variant={'h6'}>
            Features
          </PlanFeaturesTitle>

          {planItem.features.map((feature, index) => (
            <PlanFeatureRow key={index}>
              <CheckBoxIcon color={'primary'} size={16} />
              <PlanFeaturesIncluded color={'secondary'} variant={'h6'}>
                {feature}
              </PlanFeaturesIncluded>
            </PlanFeatureRow>
          ))}

          {planItem.notIncluded.map((feature, index) => (
            <PlanFeatureRow key={index}>
              <StyledUnchecked size={16} />
              <PlanFeaturesExcluded variant={'h6'}>
                {feature}
              </PlanFeaturesExcluded>
            </PlanFeatureRow>
          ))}

          { planItem.pricingDisclaimer &&
            <PlanPricingDisclaimer color={'secondary'} variant={'h6'}>
              * Quotas beyond plan:
              <br/>
              Additional users: 5$/month
              <br/>
              Additional templates: 0.4$/month
            </PlanPricingDisclaimer>
          }
        </PlanCard>
      </Grid>
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
        {plans.map(planItem => (
          <PricingCard planItem={planItem} key={planItem.name} />
        ))}
      </StyledGrid>
    </GridContainer>
  );
};

export default PricingSlice;
