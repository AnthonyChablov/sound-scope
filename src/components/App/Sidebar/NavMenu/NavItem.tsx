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
        <li className={` border-solid
            ${isActive 
                ? responsiveDisplay 
                    ? 'border-l-4 bg-zinc-900' 
                    : 'border-t-4 bg-zinc-900' 
                : ''
            }
            ${!isActive 
                ? responsiveDisplay 
                    ? 'ml-2' 
                    : 'mt-2' 
                : ''
            }
        `}
        >
            <Button className='flex flex-col items-center p-0 pt-2 w-fit md:mt-4 md:py-2' >
                <Icons type={icon} size={iconSize} />
                <p className='text-xs pt-2 capitalize text-white'>{title}</p>
            </Button>
        </li>
    )
}

export default NavItem