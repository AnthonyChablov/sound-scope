import create from 'zustand';

type State={
    toggleSideBar: boolean,
    windowWidth: number,
    isSelected: boolean,
    spotifyToken: string | null,
    spotifyRefreshToken: string,
 }
 
 type Action={
    setToggleSideBar: Function,
    setWindowWidth: Function,
    setSpotifyToken: Function,
    setSPotifyRefreshToken: Function,
 }
 
 export const useStateStore = create<State & Action>((set)=>({
    toggleSideBar: false,
    windowWidth: 0,
    isSelected: false,
    spotifyToken:'',
    spotifyRefreshToken : '',
    setSPotifyRefreshToken: ( newRefreshToken : string ) => set({ spotifyRefreshToken : newRefreshToken }),
    setSpotifyToken: ( newToken : string | null ) => set({ spotifyToken : newToken }),
    setToggleSideBar: ( newToggleSideBar : boolean ) => set({ toggleSideBar : newToggleSideBar }),
    setWindowWidth: ( newWindowWidth : number ) => set({ windowWidth : newWindowWidth})
 }))