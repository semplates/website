import React from 'react';
import { Grid, Hidden, styled, Tab, Tabs, Typography } from '@material-ui/core';
import { GridContainer, SliceTitle } from '../Shared';
import {
  BarChart,
  CheckShield,
  Cloud,
  Code,
  Copy,
  Edit,
  LineChart,
  Import,
  NetworkChart,
  NetworkCheck,
  PeopleAlt,
  PeopleCheckmark,
  PeopleCommunityAdd,
  PeopleSettings,
  PeopleSwap,
  PieChart,
  PriceCheck,
  SlideDesign,
  TableChart,
  Tags,
  Variable,
} from '../../../static/icons';

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(10),
}));

const StyledFeatureGrid = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(5, 0),
}));

const UseCaseTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  padding: theme.spacing(0, 0, 2, 0),
}));

const UseCaseText = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  minHeight: '200px',
}));

const features = [
  {
    topic: 'Create',
    suffix: '#create',
    icon: (
      <Edit size={24} style={{ marginRight: '4px', paddingBottom: '2px' }} />
    ),
    features: [
      {
        title: 'SES Email Templates Editor',
        description: "Design engaging and responsive SES email templates that carry your brand. Semplates let's you images per drag-and-drop, place links and data placeholders or add pure HTML to create vivid reading experiences. You can start from scratch or based on our email template starters.",
        icon: <SlideDesign size={30} />,
      },
      {
        title: 'SES Email Templates Import',
        description:
          "Import your existing email templates from SES with the Semplates Template Import functionality. Doing so allows you to manage all your existing email templates visually in one place with Semplates. Never ask your developers again to pull some template from SES, but import your email templates directly via Semplates.",
        icon: <Import size={30} />,
      },
      {
        title: 'SES Email Template Manager',
        description:
          'Easily edit and manage all your AWS SES email templates in one place. Design new email templates, create copies or import existing email templates from Amazon SES. Quickly sort, filter and search among all of your email templates.',
        icon: <Copy size={30} />,
      },
      {
        title: 'Tag Manager',
        description:
          'Use the Semplates Tag Manager to create tags for your email templates that fit and describe your processes and business needs in order to organize them. The tags allow you to easily filter your templates.',
        icon: <Tags size={30} />,
      },
      {
        title: 'Variable Preview',
        description:
          'Test how your email templates will look like by substituting test variables. You can also send your templated email with sample data right from the Semplates Frontend.',
        icon: <Variable size={30} />,
      },
    ],
  },
  {
    topic: 'Collaborate',
    suffix: '#collaborate',
    icon: (
      <PeopleAlt
        size={25}
        style={{ marginRight: '4px', paddingBottom: '2px' }}
      />
    ),
    features: [
      {
        title: 'Collaborative working',
        description:
          'Make Semplates your workbench tool for collaboration across design, product and tech experts. Easily add and manage team members, so you can create and send beautiful templates together.',
        icon: <PeopleCommunityAdd size={30} />,
      },
      {
        title: 'Tech / Non-Tech Collaboration',
        description:
          'Stop waiting for your tech teams availability and remain in full control over your sending activities. Deploy email templates to AWS SES and maintain your production templates on your own with Semplates. Then let your tech colleagues do the integration work.',
        icon: <PeopleSwap size={30} />,
      },
      {
        title: 'Verified Email Sender Addresses',
        description:
          'Quickly add and authorize any number of email sender addresses or change your default address. Add, edit and delete addresses as needed, to increase personalization across touchpoints, customer segments or campaigns.',
        icon: <PeopleCheckmark size={30} />,
      },
      {
        title: 'Roles & Access',
        description:
          'Manage the access to your payment and subscription settings or analyse your teams sending activities through user roles & access management.',
        icon: <PeopleSettings size={30} />,
      },
    ],
  },
  {
    topic: 'Monitor',
    suffix: '#monitor',
    icon: (
      <TableChart
        size={25}
        style={{ marginRight: '4px', paddingBottom: '2px' }}
      />
    ),
    features: [
      {
        title: 'Sent Emails per Day',
        description:
          'Monitor your sending activities via Semplates for each day across selected time periods. Recognize seasonal, weekly or daily trends so you can adjust your processes accordingly.',
        icon: <LineChart size={30} />,
      },
      {
        title: 'Sent Emails per Template',
        description:
          'Monitor your sending activities via Semplates for each email template. Understand which designs works best and add the most value to your business.',
        icon: <BarChart size={32} />,
      },
      {
        title: 'Sent Emails per Sender Address',
        description:
          'Monitor your sending activities via Semplates for each email sender address to see which addresses in your team perform best. Continuously improve your teams performance over time through these insights.',
        icon: <PieChart size={30} />,
      },
      {
        title: 'Subscription & Billing',
        description:
          'Monitor your currently booked Semplates subscription and keep an eye on your monthly bill which is calculated based on your base plan and additional feature use. Up- or downgrade your plan anytime if this better suits your needs.',
        icon: <PriceCheck size={30} />,
      },
    ],
  },
  {
    topic: 'Integrate',
    suffix: '#integrate',
    icon: (
      <NetworkChart
        size={25}
        style={{ marginRight: '4px', paddingBottom: '2px' }}
      />
    ),
    features: [
      {
        title: 'Cloud Native Infrastructure',
        description:
          'Amazon SES runs within Amazon’s proven network infrastructure and datacenters. Semplates runs on cloud infrastructure as well. All templates and all outgoing email messages are stored redundantly across multiple servers and datacenters, providing high availability and data durability.',
        icon: <Cloud size={30} />,
      },
      {
        title: '5 Minute Setup',
        description:
          "If your organization is already using AWS as it's cloud provider, it only takes 5 minutes, to initiate AWS SES, issue IAM access keys and start creating email templates with Semplates.",
        icon: <NetworkCheck size={30} />,
      },
      {
        title: 'High Delivery Rates',
        description:
          "AWS SES maintains a strong reputation with email clients resulting in high delivery rates to your recipients inboxes. Make use of this reputation right away through SES shared IP pools. Use Semplates' analytics to track several metrics and keep your reputation and delivery rates high.",
        icon: <CheckShield size={30} />,
      },
      {
        title: 'Tech Agnostic API',
        description:
          'Technical team members can simply integrate Semplates via the HTTP API in your application and call Semplates service programmatically. Our API is fully documented, including examples for the most important calls.',
        icon: <Code size={32} />,
      },
    ],
  },
];

const FeatureSlice = ({ location, title, subTitle }) => {
  const startIndex = location.hash
    ? features.findIndex(x => x.suffix === location.hash)
    : 0;
  const [value, setValue] = React.useState(startIndex);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const FeaturesGrid = ({ selectedCategory }) => {
    return (
      <StyledFeatureGrid item xl={12}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          spacing={10}>
          {selectedCategory.features.map((feature, index) => (
            <Grid item xs={12} md={5} key={index}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}>
                <Grid
                  item
                  xs={1}
                  style={{ color: '#5bc0be', marginRight: '10px' }}>
                  {feature.icon}
                </Grid>
                <Grid item xs={10} md={10}>
                  <UseCaseTitle color="primary" variant={'h5'}>
                    {feature.title}
                  </UseCaseTitle>
                </Grid>
                <Grid item xs={12}>
                  <UseCaseText variant={'h6'}>
                    {feature.description}
                  </UseCaseText>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </StyledFeatureGrid>
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

        <Grid item xs={12}>
          <Hidden smDown>
            <Tabs variant="fullWidth" value={value} onChange={handleChange}>
              {features.map((featuresCategory, index) => (
                <Tab
                  key={index}
                  variant="fullWidth"
                  href={`/features${featuresCategory.suffix}`}
                  disableTouchRipple={true}
                  icon={featuresCategory.icon}
                  label={featuresCategory.topic}
                />
              ))}
            </Tabs>
          </Hidden>
          <Hidden mdUp>
            <Tabs
              orientation="vertical"
              variant="fullWidth"
              value={value}
              onChange={handleChange}>
              {features.map((featuresCategory, index) => (
                <Tab
                  key={index}
                  variant="fullWidth"
                  href={`/features${featuresCategory.suffix}`}
                  disableTouchRipple={true}
                  icon={featuresCategory.icon}
                  label={featuresCategory.topic}
                />
              ))}
            </Tabs>
          </Hidden>
        </Grid>
        <FeaturesGrid selectedCategory={features[value]} />
      </StyledGrid>
    </GridContainer>
  );
};

export default FeatureSlice;
