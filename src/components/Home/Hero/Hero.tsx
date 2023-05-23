import React from 'react'
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import phoneListening from '../../../assets/girl-listening-2.jpg';
import Link from 'next/link';
import { headerVariants, subHeaderVariants} from '@/variant';


const Hero = () => {
  return (
    <div className='h-screen opacity-100 bg-zinc-900'>
        <div className="bg-zinc-900 h-fit w-screen pt-40 md:pt-32 max-w-6xl mx-auto px-9 
          md:flex md:justify-between md:space-x-14"
        >
            {/* Content */}
            <motion.div className="w-full sm:w-9/12 md:w-6/12 md:flex md:flex-col md:pt-[10%]"
                variants={headerVariants}
                initial={'hidden'}
                animate={'visible'}
            >
                {/* Header */}
                <h1 className='text-slate-300 text-6xl font-bold mb-5'>
                    View
                </h1>
                {/* Text */}
                <p className='text-bold text-slate-300 text-lg font-semibold mb-7'>
                    View your Spotify profile and listening history. 
                    Keep up with your listening habits and stay up-to-date with your favorite artists. 
                </p>
                {/* Get Started */}
                <div className="w-fit">
                    <Link href={'/login'}>
                    <Button 
                        className='bg-slate-300 rounded-full text-black
                        font-semibold text-md hover:bg-slate-600 hover:text-slate-200 '
                        variant="contained"
                    >
                        Get Started
                    </Button>
                    </Link>
                </div>
            </motion.div>
            <motion.div className="mt-20 flex items-center justify-center md:mt-14 md:justify-end "
                variants={subHeaderVariants}
                initial={'hidden'}
                animate={'visible'}
            >
              <div className="rounded-full overflow-hidden h-fit mb-10 shadow-lg bg-gradient-to-r from-slate-500 to-zinc-900">
                  <Image
                      className='opacity-30'
                      src={phoneListening}
                      width={450}
                      height={100}
                      alt='holding phone'
                  ></Image>
              </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero