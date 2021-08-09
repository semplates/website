import React from 'react';
import Layout from '../components/Layout/Layout';
import { PricingSlice } from '../components/Slices';

export default function Pricing() {
  const title = 'Pricing Plans';
  const subTitle =
    'Choose the plan that fits your requirements and project dynamics best. You can up- or downgrade your subscription anytime in your companies account settings.';
  const pathname = 'pricing';
  return (
    <Layout title={title} description={subTitle} pathname={pathname}>
      <PricingSlice title={title} subTitle={subTitle} />
    </Layout>
  );
}
