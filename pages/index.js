import React from 'react';
import Head from 'next/head';
import PageLayout from '../layout/layout';
import Header from '../components/Header/Header';
import About from '../components/About/About';

const Root = () => (
  <>
    <Head>
      <title>TDE</title>
    </Head>
    <PageLayout>
      <Header />
      <About />
    </PageLayout>
  </>
);

export default Root;
