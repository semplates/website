import React from 'react';
import Layout from '../components/Layout/Layout';
import { Features } from '../components/Slices';

export default function Index({ location }) {
  const title = 'Features';
  const subTitle =
    'Semplates is full of features designed to help you collaborate on email templates and ease your SES email sending activities.';
  const pathname = 'features';
  return (
    <Layout title={'Features'} description={subTitle} pathname={pathname}>
      <Features title={title} location={location} subTitle={subTitle} />
    </Layout>
  );
}
