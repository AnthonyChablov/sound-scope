import React, {useState}from 'react';
import Head from 'next/head';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import AppLayout from '@/components/App/AppLayout';


const app = () => {

  const [accessToken, setAccessToken] =useState('');

  return (
    <section className=''>
      <Head>
        <title key={'title'}>App</title>
      </Head>
      <Sidebar />
      <AppLayout mode={'app'}/>
      <p></p>
    </section>
  )
}



export default app;