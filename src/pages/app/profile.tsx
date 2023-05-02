import React from 'react';
import Head from 'next/head';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import AppLayout from '@/components/App/AppLayout';

const profile = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>Profile</title>
      </Head>
      <Sidebar />
    </section>
  )
}

export default profile