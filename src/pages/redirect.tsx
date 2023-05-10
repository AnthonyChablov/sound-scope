import React from 'react';
import Head from 'next/head';
import ErrorLayout from '@/components/Error/ErrorLayout';

const redirect = () => {

    return (
        <section>
            <Head>
                <title key={'title'}>Redirect</title>
            </Head>
            <div className='bg-zinc-900 h-full'>
                <div className="flex items-center justify-center ">
                    ...
                </div>
            </div>
        </section>
        
    )
}

export default redirect