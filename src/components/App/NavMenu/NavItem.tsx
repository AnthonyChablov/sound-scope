import {useState} from 'react';
import Icons from '@/components/Common/Icons';
import useWindowWidth from '@/hooks/useWindowWidth';
import Button from '@mui/material/Button';
import { useStateStore } from '@/store/useAppStore';

interface INavItem {
    icon:string,
    title:string,
}

const iconSize = 17;




const NavItem = ({icon, title}:INavItem) => {

    const isSelected = useStateStore(state => state.isSelected);
    const [selected, setSelected] = useState(isSelected);
    
    const windowWidth = useWindowWidth();

    const responsiveDisplay = windowWidth>= 770;
    

    function onCLickHandeller(){
        setSelected(!selected);
    }

    return (
        <li className={`m-1 p-1 border-solid rounded-lg
            ${selected 
                ? responsiveDisplay 
                    ? 'border-l-4 ' 
                    : 'border-b-4  ' 
                : ''
            }
            ${!selected 
                ? responsiveDisplay 
                    ? 'ml-2' 
                    : 'mb-2' 
                : ''
            }
        `}
            onClick={()=>onCLickHandeller()}
        >
            <Button className='flex flex-col items-center w-full ' >
                <Icons type={icon} size={iconSize} />
                <p className='text-xs pt-2 capitalize text-white'>{title}</p>
            </Button>
        </li>
    )
}

export default NavItem