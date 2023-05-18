import React from 'react'
import Head from 'next/head'
import Sidebar from '@/components/App/Sidebar/Sidebar'
import AppLayout from '@/components/App/AppLayout'

const playlists = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>Playlists</title>
      </Head>
      
      <AppLayout mode='playlists'/>
    </section>
  )
}

export default playlists