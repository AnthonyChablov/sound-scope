import React from 'react'
import Sidebar from '@/components/App/Sidebar/Sidebar'
import Head from 'next/head'

const artists = () => {
  return (
    <section>
      <Head>
        <title key={'title'}>Artists</title>
      </Head>
      <Sidebar />
    </section>
  )
}

export default artists