import React, {useState}from 'react';
import Head from 'next/head';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import AppLayout from '@/components/App/AppLayout';
import Axios from 'axios';

const app = () => {

  const [accessToken, setAccessToken] =useState('');

  return (
    <section className=''>
      <Head>
        <title key={'title'}>App</title>
      </Head>
      <Sidebar />
      <AppLayout mode={'app'}/>
    </section>
  )
}

/* export async function getStaticProps() {
  // make api request 
  let authParameters = {
    method:'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
    },
    body: 'grant_typeclient_credentials&client_id=' + 
    process.env.SPOTIFY_CLIENT_ID + 'client_secret=' + process.env.SPOTIFY_SECRET
  }
  /* fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json)
    .then(data => console.log(data?.access_token)); 

}  */


export default app;