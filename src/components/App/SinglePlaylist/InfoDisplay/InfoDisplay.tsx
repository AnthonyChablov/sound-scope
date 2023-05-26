import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "@/hooks/useWindowWidth";
import SpotifyButton from "@/components/Common/SpotifyButton";
import RecommendButton from "@/components/Common/RecommendButton";
import SpotifyLogoDisplay from "@/components/Common/SpotifyLogoDisplay";

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
                        (<div className={`mx-auto mb-4 overflow-hidden flex items-center shadow-lg flex-col  
                            `
                        }>  
                        <div className="">
                            <div className={`flex  mb-4 w-fit `}>
                                <SpotifyLogoDisplay width={90}/>
                            </div>
                            <div className={` overflow-hidden ${width > 900 ? 'w-[300px] h-[300px]' : 'w-fit h-[300px]'}`}>
                                <Image 
                                    src={img} 
                                    alt="playlist-cover" 
                                    width={300}
                                    height={300}
                                    loading="lazy"
                                    unoptimized={true}
                                />
                            </div>
                        </div>
                        </div> )
                    :
                        <div className={`mx-auto mb-4 overflow-hidden flex items-center shadow-lg bg-slate-600 w-[300px] h-[300px]
                        `}>
                        </div>
            }
            <h1 className="text-3xl text-slate-100 font-bold mt-10 mb-6">{title}</h1>
            <h2 className="text-lg text-slate-400 font-normal mb-2">{subTitle}</h2>
            <p className="text-md text-slate-200 font-normal mb-7 capitalize">{caption}</p>
            <div className="flex flex-col space-y-5 ">
                <div className="w-fit mx-auto">
                    <SpotifyButton 
                        text='View in Spotify' 
                        size={30} 
                        color={'black'} 
                        link={route}
                    />
                </div>
                <div className="w-fit mx-auto">
                    <Link href={route} >
                        <RecommendButton buttonText={'Get Recommendations'}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InfoDisplay