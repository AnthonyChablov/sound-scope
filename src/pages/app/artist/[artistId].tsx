import React, {useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import { useArtistStore } from '@/store/useArtistStore';
import { IArtistLongTerm } from '@/models/artists';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import Image from 'next/image';

const Artist = () => {

  /* State */
  const [artistName , setArtistName] = useState<string | null>(null);
  const [artistImage , setArtistImage] = useState<string >('');
  const [artistFollowers , setArtistFollowers] = useState<number | null>(null);
  const [artistGenres , setArtistGenres] = useState<string[] | null>(null);
  const [artistPopularity , setArtistPopularity] = useState<number | null>(null);

  const artistData = useArtistStore(state => state.artistData);
  const setArtistData = useArtistStore(state => state.setArtistData);

  const router = useRouter();
  const artistId = router.query.artistId;

  useEffect(() => {

    if(!router.isReady) return;

    artistData?.map((artist:IArtistLongTerm) => {
      if(artist.id === artistId){
        setArtistName(artist.name);
        setArtistImage(artist.images[0].url);
        setArtistFollowers(artist.followers.total);
        setArtistGenres(artist.genres);
        setArtistPopularity(artist.popularity);
    }});
    console.log(artistData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.artistId, router.isReady, artistData]);

  return (
    <>
      <Sidebar />
      
      <div className="h-screen flex items-center justify-center">
        <div className="">
          <Image src={artistImage} height={50} width={200} alt='artist'></Image>
          <h1 className="">{artistName}</h1>
          Single Artist name : {artistId}
        </div>
      </div>
    </>
  )
}

export default Artist;