import React from 'react';
import Head from 'next/head';
import PageLayout from '../layout/layout';
import Header from '../components/Header/Header';

const Root = () => (
  <>
    <Head>
      <title>TDE</title>
    </Head>
    <PageLayout>
      <Header />
    </PageLayout>
  </>
);

export default Root;
