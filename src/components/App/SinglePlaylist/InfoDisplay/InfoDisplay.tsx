import ContainedButton from "@/components/Common/ContainedButton";
import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";
import Link from 'next/link';

interface IInfoDisplay{
    img:string,
    title: string,
    subTitle: string,
    caption: string,
    buttonText: string,
    route:string
}

const InfoDisplay = ({img, title, subTitle, caption, buttonText, route}: IInfoDisplay) => {

    const width = useWindowWidth();

    return (
        <div className={`text-center  mt-2  w-fit `}>
            <div className={`mx-auto mb-4 overflow-hidden flex items-center shadow-lg
                ${width > 900 ? 'w-[300px] h-[300px] ' : 'w-fit h-[300px]'}`
            }>
                <Image 
                    src={img} 
                    alt="playlist-cover" 
                    width={300}
                    height={300}
                    loading="lazy"
                    unoptimized={true}
                />
            </div>
            <h1 className="text-3xl text-slate-100 font-bold mb-4">{title}</h1>
            <h2 className="text-md text-slate-400 font-normal mb-4">{subTitle}</h2>
            <p className="text-sm text-slate-200 font-normal mb-6 capitalize">{caption}</p>
            <Link href={route} >
                <ContainedButton text={buttonText} />
            </Link>
        </div>
    )
}

export default InfoDisplay