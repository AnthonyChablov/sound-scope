import React from 'react'
import Sidebar from '@/components/App/Sidebar/Sidebar'
import Head from 'next/head'

const artists = () => {
  return (
    <section>
      <Head>
        <title key={'Top Artists'}>App</title>
      </Head>
      <Sidebar />
    </section>
  )
}

export default artists