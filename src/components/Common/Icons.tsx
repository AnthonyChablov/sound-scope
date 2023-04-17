
import {BsSpotify} from 'react-icons/bs';
import {
    AiFillHtml5, 
    AiFillGithub, 
    AiFillLinkedin, 
    AiFillTwitterSquare, 
    AiOutlineClose, 
    AiOutlineMenu
} 
from 'react-icons/ai';

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
        }[type]
    }</div>
  )
}

export default Icons