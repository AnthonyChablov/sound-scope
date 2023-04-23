import React from 'react'
import Head from 'next/head';
import Navbar from '@/components/Home/Navbar/Navbar';
import LoginLayout from '@/components/Login/LoginLayout';

const login = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>Login</title>
      </Head>
      <Navbar/>
      <LoginLayout/>
    </section>
  )
}

export default login;