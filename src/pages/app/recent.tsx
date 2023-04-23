import React from 'react';
import Head from 'next/head';
import Sidebar from '@/components/App/Sidebar/Sidebar';

const recent = () => {
  return (
    <section>
      <Head>
        <title key={'Recent'}>App</title>
      </Head>
      <Sidebar />
    </section>
  )
}

export default recent