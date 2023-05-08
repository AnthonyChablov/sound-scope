import OutlinedButton from "@/components/Common/OutlinedButton";
import Link from "next/link";
import {motion} from 'framer-motion';
import { subHeaderVariants } from "@/variant";

interface IHeader{
    title : string,
    buttonText: string,
    buttonLink: string,
}

const subHeader = ({title, buttonText, buttonLink} : IHeader) => {
  return (
    <motion.div className=" flex items-center justify-between mb-10 "
      variants={subHeaderVariants}
      initial={'hidden'}
      animate={'visible'}
    >
        <h2 className="text-white font-bold text-md md:text-lg mr-12 w-fit">{title}</h2>
        <Link href={buttonLink}>
          <OutlinedButton title={buttonText}></OutlinedButton>  
        </Link>
    </motion.div>
  )
}

export default subHeader;