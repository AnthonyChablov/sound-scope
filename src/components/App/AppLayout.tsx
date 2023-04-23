import Sidebar from "./Sidebar/Sidebar";
import Card from "./Card/Card";
import Image from "next/image";
import placeholder from '../../assets/webimage-CFCF5ECC-63CC-421D-AA5A1806A936CC97.png';

interface IAppLayout{
  mode:string
} 

const AppLayout = ({mode}:IAppLayout) => {
  return (
    <div className=" bg-zinc-900 h-screen">
      {
        mode ==='app' && (
          <div className="flex items-center" >
            {/* Image Placeholder */}
            <Image height={100} width={100} src={placeholder} alt="placeholder"></Image>
          </div>

        )
      }
        

    </div>
  )
}

export default AppLayout;