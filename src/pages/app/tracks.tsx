import React from 'react';
import Head from 'next/head';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import AppLayout from '@/components/App/AppLayout';

const tracks = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>Tracks</title>
      </Head>
      <Sidebar />
      <AppLayout mode='tracks'/>
    </section>
  )
}

export default tracks