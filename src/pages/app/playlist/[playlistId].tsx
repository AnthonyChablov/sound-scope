import {ReactNode} from 'react';
import SinglePlaylistLayout from '@/components/App/SinglePlaylist/SinglePlaylistLayout';
import Sidebar from '@/components/App/Sidebar/Sidebar';

const playlist = () => {
  return (
    <div>
        <SinglePlaylistLayout />
    </div>
  )
}

export default playlist;

playlist.getLayout = function ApplicationLayout(page:ReactNode){
  return (
    <>
      {page}
    </>
  )
}