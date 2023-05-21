import {ReactNode} from 'react';
import Head from 'next/head';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import AppLayout from '@/components/App/AppLayout';

const tracks = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>Tracks</title>
      </Head>
      <AppLayout mode='tracks'/>
    </section>
  )
}

export default tracks

tracks.getLayout = function ApplicationLayout(page:ReactNode){
  return (
    <>
      {page}
    </>
  )
}