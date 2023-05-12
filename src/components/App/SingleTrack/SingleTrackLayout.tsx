import {useEffect} from 'react';
import useSWR from "swr";
import {motion} from 'framer-motion';
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import useWindowWidth from '@/hooks/useWindowWidth';
import { getSingleTrack, getTrackFeatures, getTrackAnalysis } from "@/spotifyApi/spotifyApi";
import Button from "@mui/material/Button";
import LoadingLayout from "@/components/Loading/LoadingLayout";
import ErrorLayout from "@/components/Error/ErrorLayout";
import Sidebar from "../Sidebar/Sidebar";
import GridLayout from './Grid/GridLayout';
import Box from './Grid/Box';
import { msToTime, parsePitchClass } from '@/utils/utils';
import ChartDisplay from './Chart/ChartDisplay';
import { headerVariants, subHeaderVariants, contentVariants } from '@/variant';


const SingleTrackLayout = () => {

  /* Hooks */
  const router = useRouter();
  const trackId = router.query.trackId;
  const width = useWindowWidth();

  /* Fetch Data */
  const {
    data: singleTrack, 
    error : isErrorSingleTrack, 
    isLoading: isLoadingSingleTrack,
  } = useSWR('singleTrack', ()=> getSingleTrack(String(trackId)));

  const {
    data: trackFeatures, 
    error : isErrorTrackFeatures, 
    isLoading: isLoadingTrackFeatures,
  } = useSWR('trackFeatures', ()=> getTrackFeatures(String(trackId)));

  const {
    data: trackAnalysis, 
    error : isErrorTrackAnalysis, 
    isLoading: isLoadingTrackAnalysis,
  } = useSWR('trackAnalysis', ()=> getTrackAnalysis(String(trackId)));

  useEffect(() => {
    console.log(singleTrack);
  }, [singleTrack, trackFeatures, trackAnalysis]);

  return (
    <>
      <Sidebar />
      {
        (isErrorSingleTrack || isErrorTrackFeatures || isErrorTrackAnalysis) 
          ? <ErrorLayout /> 
          : (isLoadingSingleTrack || isLoadingTrackFeatures || isLoadingTrackAnalysis)
            ? (<LoadingLayout /> )
            : (
                <div className="h-full flex justify-center w-9/12 mx-auto 
                  md:w-7/12 lg:w-6/12 xl:w-10/12 mb-96"
                >
                  <div className={`mt-10`}>
                    <div className={`flex 
                      ${ width >= 512 ? 'flex-row items-start ' : 'flex-col'}`
                    }>
                      {/* Album Art */}
                      <motion.div className={`flex flex-row justify-center `}
                        variants={headerVariants}
                        initial={'hidden'}
                        animate={'visible'}
                      >
                        <Image 
                          src={singleTrack?.album.images[0].url} 
                          height={50} 
                          width={width >= 800 ? 450 : 250} 
                          loading="lazy"
                          unoptimized={true}
                          alt='album-cover'
                        ></Image>
                      </motion.div>
                      {/* album info display */}
                      <motion.div className={`w-9/12 
                        ${ width > 513 ? 'text-left ml-12' : 'text-center mx-auto mt-8'}`}
                        variants={subHeaderVariants}
                        initial={'hidden'}
                        animate={'visible'}
                      >
                        <h1 className={`text-slate-100 font-bold text-3xl 
                          ${width > 500 ? 'mt-0' : ''}`
                        }>
                          {singleTrack?.name}
                        </h1>
                        <h2 className='font-bold text-slate-400 text-xl mt-2'>{singleTrack?.artists[0].name}</h2>
                        <p className='font-regular text-slate-500 mt-2'>
                          {singleTrack?.album.name + ' · ' + singleTrack?.album.release_date.substring(0,4)}
                        </p>
                        <div className="" >
                          <Link href={singleTrack?.external_urls.spotify} rel="noopener noreferrer" target="_blank">
                            <Button 
                              className='rounded-full mt-6 font-bold px-6 text-slate-200 bg-green-600 hover:bg-green-500'
                              variant='contained'
                            > 
                              Play On Spotify
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                      
                    </div>
                    {/* Grid display */}
                    <motion.div className={`grid grid-cols-2 mt-14 mb-10 
                      ${ width > 360 && 'grid-cols-3' }
                      ${ width > 500 && 'grid-cols-2' }
                    `}
                      variants={contentVariants}
                      initial={'hidden'}
                      animate={'visible'}
                    >
                      <Box 
                        title={msToTime(singleTrack?.duration_ms)} 
                        subTitle="Duration"
                      />
                      <Box 
                        title={parsePitchClass(trackFeatures?.key)} 
                        subTitle="Key"
                      />
                      <Box 
                        title={trackFeatures?.mode === 1 ? 'Major' : 'Minor'} 
                        subTitle="Modality"
                      />
                      <Box 
                        title={trackFeatures?.time_signature} 
                        subTitle="Time Signature"
                      />
                      <Box 
                        title={String(Math.ceil(trackFeatures?.tempo))} 
                        subTitle="BPM"
                      />
                      <Box 
                        title={singleTrack?.popularity + '%'} 
                        subTitle="Popularity"
                      />
                      <Box 
                        title={trackAnalysis?.beats.length} 
                        subTitle="Beats"
                      />
                      <Box 
                        title={trackAnalysis?.bars.length} 
                        subTitle="Bars"
                      />
                      <Box 
                        title={trackAnalysis?.sections.length } 
                        subTitle="Sections"
                      />
                      <Box 
                        title={trackAnalysis?.segments.length} 
                        subTitle="Segments"
                      />
                    </motion.div>
                    {/* Chart */}
                    <div className="mt-12 w-9/12 mx-auto text-center">
                      <ChartDisplay 
                        danceability={Math.ceil(trackFeatures?.danceability *100)}
                        energy={Math.ceil(trackFeatures?.energy *100)}
                        speechiness={Math.ceil(trackFeatures?.speechiness *100)}
                        acousticness={Math.ceil(trackFeatures?.acousticness *100)}
                        instrumentalness={Math.ceil(trackFeatures?.instrumentalness *100)}
                        liveness={Math.ceil(trackFeatures?.liveness *100)}
                        valence={Math.ceil(trackFeatures?.valence *100)}
                      />
                    </div>
                  </div>
                </div>
            )
      }
    </>
  )
}

export default SingleTrackLayout