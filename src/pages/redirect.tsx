import React from 'react';

import Head from 'next/head';
import RedirectLayout from '@/components/Redirect/RedirectLayout';

const redirect = () => {

    /* router */

    return (
        <section>
            <Head>
                <title key={'title'}>Redirect</title>
            </Head>
            <div className='bg-zinc-900 flex items-center justify-center h-screen'>
                <RedirectLayout/>
            </div>
        </section>
        
    )
}

export default redirect