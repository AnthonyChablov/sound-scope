import useWindowWidth from "@/hooks/useWindowWidth";
import Icons from "@/components/Common/Icons";
import Drawer from '@mui/material/Drawer';
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import NavMenu from "../NavMenu/NavMenu";


interface ISideBar {
  anchor : string,
  mode ?: string
}

const iconSize = 37.5;



const Sidebar = ({anchor, mode}:ISideBar) => {

  const [toggleSideBar, setToggleSideBar] = useState(true);
  const windowWidth = useWindowWidth();
  const drawerWidth = 'fit';

  const tabletDisplay = windowWidth >= 770;

  return (
    <Drawer
      sx={{
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
      <div className="flex flex-row justify-between text-white  ">
        <div className={`py-4 w-full flex flex-row justify-between content-between 
          ${ tabletDisplay && 'h-screen flex-col'}`
        }>
          <div className=" flex justify-center">
            { tabletDisplay && (
              <IconButton>
                <Icons type="spotify" size={iconSize}/>
              </IconButton> ) 
            }
          </div>
          <NavMenu />
          <div className=" flex justify-center">
            { tabletDisplay && (
                <IconButton>
                  <Icons type="github" size={iconSize}/>
                </IconButton> 
              )
            }
          </div>
        </div>
      </div>
    </Drawer>
  )
}

export default Sidebar;