import React from 'react';
import Head from 'next/head';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import AppLayout from '@/components/App/AppLayout';


const app = () => {

  return (
    <section className=''>
      <Head>
        <title key={'title'}>App</title>
      </Head>
      
      <AppLayout mode={'app'}/>
      <p></p>
    </section>
  )
}



export default app;