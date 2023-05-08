import Icons from '@/components/Common/Icons';
import useWindowWidth from '@/hooks/useWindowWidth';
import Button from '@mui/material/Button';

interface INavItem {
    icon:string,
    title:string,
    isActive:boolean,
}

const iconSize = 16;

const NavItem = ({icon, title, isActive}:INavItem) => {

    const windowWidth = useWindowWidth();
    const responsiveDisplay = windowWidth>= 770;

    return (
        <li className={` border-solid hover:bg-zinc-900 h-full w-full py-2 px-2 shadow-md 
            ${isActive 
                ? responsiveDisplay 
                    ? 'border-l-4 bg-zinc-900 ' 
                    : 'border-t-4 bg-zinc-900 ' 
                : ''
            }
            ${!isActive 
                ? responsiveDisplay 
                    ? 'pl-3' 
                    : 'pt-3' 
                : ''
            }
        `}>
            <Button className='flex flex-col items-center p-0 py-2 w-full hover:bg-transparent' 
                disableRipple
            >
                <Icons type={icon} size={iconSize} />
                <p className='text-xs font-bold pt-2 capitalize text-white'>
                    {title}
                </p>
            </Button>
        </li>
    )
}

export default NavItem;