import {ReactNode} from 'react';
import SingleTrackLayout from '@/components/App/SingleTrack/SingleTrackLayout';
import Script from 'next/script';
import Sidebar from '@/components/App/Sidebar/Sidebar';

const track = () => {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" />
      <SingleTrackLayout />
    </>
  )
}

export default track;

track.getLayout = function ApplicationLayout(page:ReactNode){
  return (
    <>
      {page}
      
    </>
  )
}