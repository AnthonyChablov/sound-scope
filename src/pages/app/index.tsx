import React ,{ReactNode} from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
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

app.getLayout = function ApplicationLayout(page:ReactNode){
  return (
    <>
      {page}
      
    </>
  )
}