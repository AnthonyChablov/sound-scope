import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Head from 'next/head';

import Sidebar from '@/components/App/Sidebar/Sidebar';

export default function App({ Component, pageProps }: AppProps) {

  if(Component.getLayout){
    return Component.getLayout(
      <>
        <Component {...pageProps} />
        <Sidebar/>
      </>
    )
  }

  return (
  <div className="">
    <Head>
        <title key={'title'}> My Spotify Profile </title>
        <meta name="description" key={'description'} content="Next App"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </div>
  )
}
