import {ReactNode} from 'react';
import Head from 'next/head';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import AppLayout from '@/components/App/AppLayout';

const recent = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>Recent</title>
      </Head>
      <AppLayout mode='recent'/>
    </section>
  )
}

export default recent

recent.getLayout = function ApplicationLayout(page: ReactNode){
  return (
    <>
      {page}
      
    </>
  )
}