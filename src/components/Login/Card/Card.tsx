import React from 'react';
import Button from '@mui/material/Button';

const Card = () => {
  return (
    <>
        <div className="mt-20  max-w-5xl mx-auto w-screen px-9 md:flex md:justify-between">
            <h1 className=' text-6xl font-bold'>Login</h1>
        </div>
        <div className='flex items-center justify-center h-screen'>
            <div className=" bg-slate-100 p-1">
                {/* Header */}
                <Button className='bg-yellow-400 rounded-full text-fuchsia-700 
                    font-semibold text-md hover:bg-fuchsia-300 w-fit'
                    variant="contained"
                > 
                    Login to Spotify
                </Button>
            </div>
        </div>
    </>
  )
}

export default Card