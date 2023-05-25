import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";
import SpotifyButton from "@/components/Common/SpotifyButton";

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
        <div className={`text-center mt-2 w-fit `}>

            {
                img 
                    ? 
                        (<div className={`mx-auto mb-4 overflow-hidden flex items-center shadow-lg 
                            ${width > 900 ? 'w-[300px] h-[300px]' : 'w-fit h-[300px]'}`
                        }> 
                            <Image 
                                src={img} 
                                alt="playlist-cover" 
                                width={300}
                                height={300}
                                loading="lazy"
                                unoptimized={true}
                            />
                        </div> )
                    :
                        <div className={`mx-auto mb-4 overflow-hidden flex items-center shadow-lg bg-slate-600 w-[300px] h-[300px]
                        `}></div>
            }
            <h1 className="text-3xl text-slate-100 font-bold mt-10 mb-6">{title}</h1>
            <h2 className="text-lg text-slate-400 font-normal mb-2">{subTitle}</h2>
            <p className="text-md text-slate-200 font-normal mb-7 capitalize">{caption}</p>
            <SpotifyButton 
                text='Play on Spotify' 
                size={30} 
                color={'black'} 
                link={route}
            />
        </div>
    )
}

export default InfoDisplay