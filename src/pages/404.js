import React from 'react';
import Layout from '../components/Layout/Layout';
import { PageNotFoundSlice } from '../components/Slices';

export default function Pricing() {
  const title = '404 - Page Not Found';
  const subTitle =
    'Ups... you hit a route that does not exist! Click here to go back to home:';
  const pathname = '404';
  return (
    <Layout title={title} description={subTitle} pathname={pathname}>
      <PageNotFoundSlice title={title} subTitle={subTitle} />
    </Layout>
  );
}
