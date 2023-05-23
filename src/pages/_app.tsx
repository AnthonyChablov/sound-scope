import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Head from 'next/head';
import NoSSRWrapper from '@/components/NoSSR/NoSSRWrapper';

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
        <title key={'title'}> Sound Scope </title>
        <meta name="description" key={'description'} content="View your Spotify profile and listening history. Keep up with your listening habits and stay up-to-date with your favorite artists."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </div>
  )
}
