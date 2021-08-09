import React from 'react';
import Layout from '../components/Layout/Layout';
import {
  FeaturesTeaser,
  Hero,
  TemplatesTeaser,
  ThreeColumns,
  TrialPeriodTeaser,
} from '../components/Slices';

export default function Index({}) {
  const pathname = '';
  return (
    <Layout
      title={'Simple Email Templates for AWS SES'}
      hero={<Hero />}
      pathname={pathname}>
      <ThreeColumns />
      <FeaturesTeaser />
      <TrialPeriodTeaser />
      <TemplatesTeaser />
    </Layout>
  );
}
