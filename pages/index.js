import React from 'react';
import Head from 'next/head';
import PageLayout from '../layout/layout';
import Header from '../components/HeaderSection/Header';
import About from '../components/AboutSection/About';
import Description from '../components/DescriptionSection/Description';

const Root = () => (
  <>
    <Head>
      <title>TDE</title>
    </Head>
    <PageLayout>
      <Header />
      <About />
      <Description />
    </PageLayout>
  </>
);

export default Root;
