import React from 'react';
import Head from 'next/head';
import Sidebar from '@/components/App/Sidebar/Sidebar';

const app = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>App</title>
      </Head>
      <Sidebar />
    </section>
  )
}

export default app