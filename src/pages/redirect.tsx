import React from 'react';
import Head from 'next/head';
import RedirectLayout from '@/components/Redirect/redirectLayout';

const redirect = () => {

    return (
        <section>
            <Head>
                <title key={'title'}>Redirect</title>
            </Head>
            <div className='bg-zinc-900 h-full'>
                <div className="flex items-center justify-center ">
                    <RedirectLayout/>
                </div>
            </div>
        </section>
        
    )
}

export default redirect