import OutlinedButton from "@/components/Common/OutlinedButton";
import Link from "next/link";

interface IHeader{
    title : string,
    buttonText: string,
    buttonLink: string,
}

const Header = ({title, buttonText, buttonLink}:IHeader) => {
  return (
    <div className="flex items-center space-x-32 mb-5">
        <h2 className="text-white font-bold text-lg">{title}</h2>
        <Link href={buttonLink}>
          <OutlinedButton title={buttonText}></OutlinedButton>  
        </Link>
    </div>
  )
}

export default Header