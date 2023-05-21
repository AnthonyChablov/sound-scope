import React, { ReactNode} from 'react';
import SingleArtistLayout from '@/components/App/SingleArtist/SingleArtistLayout';
import Sidebar from '@/components/App/Sidebar/Sidebar';

const artist = () => {

  return (
    <>
      <SingleArtistLayout />
    </>
  )
}

export default artist;

artist.getLayout = function ApplicationLayout(page:ReactNode){
  return (
    <>
      {page}
      
    </>
  )
}