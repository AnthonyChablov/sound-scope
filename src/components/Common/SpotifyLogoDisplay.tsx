import SpotifyLogo from '../../assets/spotifyLogos/Spotify_Logo_RGB_White.png';
import Image from 'next/image';

interface ISpotifyLogoDisplay{
  width:number
}

const SpotifyLogoDisplay = ({width}:ISpotifyLogoDisplay) => {
  return (
    <div className='w-fit '>
      <Image alt='spotify-logo' src={SpotifyLogo} width={width} height={100}/>
    </div>
  )
}

export default SpotifyLogoDisplay;