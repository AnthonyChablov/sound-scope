import useWindowWidth from "@/hooks/useWindowWidth";
import Icons from "@/components/Common/Icons";
import { motion } from "framer-motion";
import Drawer from '@mui/material/Drawer';
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import NavMenu from "./NavMenu/NavMenu";
import Link from "next/link";
import { sideBarVariants } from "@/variant";

const iconSize = 37.5;

const Sidebar = () => {

  const [toggleSideBar, setToggleSideBar] = useState(true);
  const windowWidth = useWindowWidth();
  
  const drawerWidth = 'fit';
  const tabletDisplay = windowWidth >= 768;

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
      anchor={ tabletDisplay ? 'left' : 'bottom'}
      open={toggleSideBar}
    >
      <div className="flex flex-row justify-between text-white shadow-lg">
        <div className={`w-full flex justify-between
          ${tabletDisplay ? 'py-4 h-screen flex-col ' :  'flex-row justify-between content-between'}`}
        >
          <div className=" flex justify-center">
            { tabletDisplay && (
                <Link href={'/app'}>
                  <IconButton>
                    <Icons type="spotify" size={iconSize}/>
                  </IconButton> 
                </Link>
              ) 
            }
          </div>
          <NavMenu />
          <div className=" flex justify-center">
            { tabletDisplay && (
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