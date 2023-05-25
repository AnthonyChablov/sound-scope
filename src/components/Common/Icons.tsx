
import {BsSpotify} from 'react-icons/bs';
import {
    AiFillInfoCircle,
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
import { GiMicrophone, GiConcentricCrescents} from 'react-icons/gi';
import {GrCircleInformation } from 'react-icons/gr';
import { BsMusicNoteBeamed, BsMusicPlayerFill} from "react-icons/bs";
import {RiPlayListFill} from "react-icons/ri";
import {MdError} from "react-icons/md";

interface IIcons {
    type : string,
    size: number,
    color?: string
}

const Icons = ({type, size, color}:IIcons) => {
  return (
    <div className='text-white'>{
        {
          infoCircle: <AiFillInfoCircle size={size} color='white'/>, 
          error : <MdError size={size}/>,
          spotify:<BsSpotify size={size} color={color}/>,
          menu: <AiOutlineMenu size={size}/>,
          close: <AiOutlineClose size={size}/>,
          github: <AiFillGithub size={size}/>,
          profile: <AiOutlineUser size={size}/>,
          artists:  < GiMicrophone size={size}/>,
          tracks: <BsMusicNoteBeamed size={size}/>,
          recent: <AiOutlineHistory size={size}/>,
          playlists: <RiPlayListFill size={size}/>,
          info: <GrCircleInformation size={size}/>,
          music: <GiConcentricCrescents size={size} color='#cbd5e1'/>
        }[type]
    }</div>
  )
}

export default Icons;