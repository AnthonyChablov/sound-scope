import {useEffect} from 'react';
import useSWR from "swr";
import { useRouter } from "next/router";
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
    console.log(trackAnalysis);
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
                <div className="h-screen flex justify-center w-9/12 
                  md:w-7/12 lg:w-6/12 xl:w-5/12 mx-auto mb-96"
                >
                  <div className="mt-10">
                    <div className="flex items-center justify-center">
                      <Image 
                        src={singleTrack?.album.images[0].url} 
                        height={50} 
                        width={width >= 800 ? 350 : 250} 
                        loading="lazy"
                        unoptimized={true}
                        alt='album-cover'
                      ></Image>
                    </div>
                    {/* album info display */}
                    <div className="text-center">
                      <h1 className='text-slate-200 font-bold text-3xl mt-8'>{singleTrack?.name}</h1>
                      <h2 className='font-bold text-slate-300 text-xl mt-2'>{singleTrack?.artists[0].name}</h2>
                      <p className='font-regular text-slate-400 mt-2'>
                        {singleTrack?.album.name + ' · ' + singleTrack?.album.release_date.substring(0,4)}
                      </p>
                    </div>
                    <div className="text-center">
                      <Button 
                        className='rounded-full mt-6 font-bold px-6 text-slate-200 bg-green-600 hover:bg-green-500'
                        variant='contained'
                      > 
                        Play On Spotify
                      </Button>
                    </div>
                    {/* Grid display */}
                    <div className="grid grid-cols-2 mt-14">
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
                        subTitle="Beats Per Minute"
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
                      <Box 
                        title={singleTrack?.popularity + '%'} 
                        subTitle="Popularity"
                      />

                      <div id='myChart' className="">

                      </div>
                      {/* <Box 
                        title={Math.ceil(trackFeatures?.energy *100) + '%'}
                        subTitle="Energy"
                      />
                      <Box 
                        title={Math.ceil(trackFeatures?.instrumentalness *100) + '%'}
                        subTitle="Instrumentalness"
                      />
                      <Box 
                        title={Math.ceil(trackFeatures?.danceability *100) + '%'}
                        subTitle="Danceability"
                      />
                      <Box 
                        title={Math.ceil(trackFeatures?.speechiness *100) + '%'}
                        subTitle="Speechiness"
                      /> */}

                  </div>
                  </div>
                </div>
            )
      }
    </>
  )
}

export default SingleTrackLayout