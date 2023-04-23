import React from 'react'
import Head from 'next/head'
import Sidebar from '@/components/App/Sidebar/Sidebar'

const playlists = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>Playlists</title>
      </Head>
      <Sidebar />
    </section>
  )
}

export default playlists