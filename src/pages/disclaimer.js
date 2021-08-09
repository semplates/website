import React from 'react';
import Layout from '../components/Layout/Layout';
import { Disclaimer } from '../components/Slices';

export default function Pricing() {
  const title = 'Legal Disclaimer';
  const pathname = 'disclaimer';
  return (
    <Layout title={title} pathname={pathname}>
      <Disclaimer title={title} />
    </Layout>
  );
}
