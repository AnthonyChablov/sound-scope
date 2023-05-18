import Icons from '@/components/Common/Icons';
import useWindowWidth from '@/hooks/useWindowWidth';
import Button from '@mui/material/Button';
import Link from 'next/link';

interface INavItem {
    icon:string,
    title:string,
    isActive:boolean,
    route:string,
}

const iconSize = 16;

const NavItem = ({icon, title, isActive , route}:INavItem) => {

    const windowWidth = useWindowWidth();
    const responsiveDisplay = windowWidth >= 770;

    return (
        <li className={` border-solid w-full  shadow-md sm:px-4 cursor-pointer 
            ${isActive 
                ? responsiveDisplay 
                    ? 'border-l-4 bg-zinc-900 ' 
                    : 'border-t-4 bg-zinc-900 ' 
                : ''
            }
            ${!isActive 
                ? responsiveDisplay 
                    ? 'pl-1' 
                    : 'pt-1' 
                : ''
            }
        `}>
            <a href={route}>
                <Button className='flex flex-col items-center  py-4 w-full h-full' 
                   sx={{
                        '.MuiTouchRipple-child' : {
                            'background-color': '#a1a1aa'
                        }
                   }}
                >
                    <Icons type={icon} size={iconSize} />
                    <p className='text-xs font-bold pt-2 capitalize text-white'>
                        {title}
                    </p>
                </Button>
            </a>
        </li>
    )
}

export default NavItem;