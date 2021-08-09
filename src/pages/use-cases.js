import React from 'react';
import Layout from '../components/Layout/Layout';
import { UseCasesSlice } from '../components/Slices';

export default function Pricing() {
  const title = 'Use Cases';
  const subTitle =
    'Discover how teams of different sizes make use of Semplates.';
  const pathname = 'use-cases';
  return (
    <Layout title={title} description={subTitle} pathname={pathname}>
      <UseCasesSlice title={title} subTitle={subTitle} />
    </Layout>
  );
}
