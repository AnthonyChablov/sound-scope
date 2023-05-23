import { useEffect } from "react";
import Hero from "./Hero/Hero";
import Button from "../Common/OutlinedButton";
import Navbar from "./Navbar/Navbar";
import { removeStorageSpotifyAccessToken } from "@/spotifyApi/spotifyToken";

const HomeLayout = () => {

  useEffect(() => {
    removeStorageSpotifyAccessToken()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default HomeLayout