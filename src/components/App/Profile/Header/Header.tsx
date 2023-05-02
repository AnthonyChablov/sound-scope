import OutlinedButton from "@/components/Common/OutlinedButton";
import Link from "next/link";

interface IHeader{
    title : string,
    buttonText: string,
    buttonLink: string,
}

const Header = ({title, buttonText, buttonLink} : IHeader) => {
  return (
    <div className=" flex items-center justify-between mb-10 ">
        <h2 className="text-white font-bold text-md md:text-lg mr-12 w-fit">{title}</h2>
        <Link href={buttonLink}>
          <OutlinedButton title={buttonText}></OutlinedButton>  
        </Link>
    </div>
  )
}

export default Header;