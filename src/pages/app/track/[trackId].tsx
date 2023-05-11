import React from 'react';
import SingleTrackLayout from '@/components/App/SingleTrack/SingleTrackLayout';
import Script from 'next/script';

const track = () => {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" />
      <SingleTrackLayout />
    </>
  )
}

export default track