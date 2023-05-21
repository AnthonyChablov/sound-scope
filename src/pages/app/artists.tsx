import React,{ReactNode} from 'react';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import Head from 'next/head';
import AppLayout from '@/components/App/AppLayout';

const artists = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>Artists</title>
      </Head>
      
      <AppLayout mode={'artist'}/>
    </section>
  )
}

export default artists;

artists.getLayout = function ApplicationLayout(page:ReactNode){
  return (
    <>
      {page}
      
    </>
  )
}