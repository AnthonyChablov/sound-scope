import React from 'react';
import Head from 'next/head';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import AppLayout from '@/components/App/AppLayout';

const recent = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>Recent</title>
      </Head>
      <Sidebar />
      <AppLayout mode='recent'/>
    </section>
  )
}

export default recent