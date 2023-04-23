import React from 'react';
import Head from 'next/head';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import AppLayout from '@/components/App/AppLayout';

const app = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>App</title>
      </Head>
      <Sidebar />
      <AppLayout mode={'app'}/>
    </section>
  )
}

export default app