import React from 'react';
import Layout from '../components/Layout/Layout';
import { DataPrivacy } from '../components/Slices';

export default function Pricing() {
  const title = 'Data Privacy';
  const pathname = 'data-privacy';
  return (
    <Layout title={title} pathname={pathname}>
      <DataPrivacy title={title} />
    </Layout>
  );
}
