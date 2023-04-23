import React from 'react';
import Head from 'next/head';
import Sidebar from '@/components/App/Sidebar/Sidebar';

const tracks = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>Tracks</title>
      </Head>
      <Sidebar />
    </section>
  )
}

export default tracks