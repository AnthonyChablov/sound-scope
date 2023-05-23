import useWindowWidth from "@/hooks/useWindowWidth";
import Icons from "@/components/Common/Icons";
import Drawer from '@mui/material/Drawer';
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import NavMenu from "./NavMenu/NavMenu";
import Link from "next/link";
import { useStateStore } from "@/store/useAppStore";

const iconSize = 37.5;

interface ISidebar{
  anchor:"left" | "bottom" | "right" | "top" | undefined
}

const Sidebar = ({anchor}:ISidebar) => {

  /* State */
  const [toggleSideBar, setToggleSideBar] = useState<boolean>(true);
  const sideBarAnchor = useStateStore(state => state.sideBarAnchor) ;
  const setSideBarAnchor = useStateStore(state => state.setSideBarAnchor) ;
 

  /* Hooks */
  const windowWidth = useWindowWidth();
  const drawerWidth = 'fit';
  const isLoading = windowWidth === null;
  const tabletDisplay = windowWidth >= 768;
  
  if (isLoading) {
    // Render a fallback layout or a loading indicator
    return <div>Loading...</div>;
  }

  return (
    <Drawer
      sx = {{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
              width: drawerWidth,
              backgroundColor:'#040306',
          },
      }}
      variant="persistent"
      anchor={ anchor }
      open={toggleSideBar}
    >
      <div className="flex flex-row justify-between text-white shadow-lg">
        <div className={`w-full flex justify-between flex-row content-between
          md:py-4 md:h-screen md:flex-col`}
          /* ${tabletDisplay ? 'md:py-4 md:h-screen md:flex-col ' :  'flex-row justify-between content-between'}`} */
        >
          <div className=" flex justify-center">
            { anchor === 'left' && (
                <Link href={'/app'}>
                  <IconButton>
                    <Icons type="music" size={iconSize}/>
                  </IconButton> 
                </Link>
              ) 
            }
          </div>
          <NavMenu anchor={anchor}/>
          <div className=" flex justify-center">
            { anchor === 'left' && (
              <Link href={'https://github.com/AnthonyChablov'}
                rel="noopener noreferrer" target="_blank"
              >
                <IconButton>
                  <Icons type="github" size={iconSize}/>
                </IconButton> 
              </Link>
              )
            }
          </div>
        </div>
      </div>
    </Drawer>
  )
}

export default Sidebar;