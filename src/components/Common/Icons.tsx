
import {BsSpotify} from 'react-icons/bs';
import {
    AiFillHtml5, 
    AiFillGithub, 
    AiFillLinkedin, 
    AiFillTwitterSquare, 
    AiOutlineClose, 
    AiOutlineMenu,
    AiOutlineUser,
    AiOutlineHistory
} 
from 'react-icons/ai';
import { GiMicrophone} from 'react-icons/gi';
import { BsMusicNoteBeamed} from "react-icons/bs";
import {RiPlayListFill} from "react-icons/ri";

interface IIcons {
    type : string,
    size: number,
}

const Icons = ({type, size}:IIcons) => {
  return (
    <div className='text-white'>{
        {
          spotify:<BsSpotify size={size}/>,
          menu: <AiOutlineMenu size={size}/>,
          close: <AiOutlineClose size={size}/>,
          github: <AiFillGithub size={size}/>,
          profile: <AiOutlineUser size={size}/>,
          topArtists:  < GiMicrophone size={size}/>,
          topTracks: <BsMusicNoteBeamed size={size}/>,
          recent: <AiOutlineHistory size={size}/>,
          playlists: <RiPlayListFill size={size}/>
        }[type]
    }</div>
  )
}

export default Icons