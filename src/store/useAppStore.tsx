import create from 'zustand';

type State={
    toggleSideBar: boolean,
    windowWidth: number,
    isSelected: boolean,
    spotifyToken: string | null,
    spotifyRefreshToken: string,
    toggleHeader: number,
    userId: string ,
    createdPlaylist : {}
 }
 
 type Action={
    setToggleSideBar: Function,
    setWindowWidth: Function,
    setSpotifyToken: Function,
    setSPotifyRefreshToken: Function,
    setToggleHeader: Function,
    setUserId: Function,
    setCreatedPlaylist : Function
 }
 
 export const useStateStore = create<State & Action>((set)=>({
    toggleSideBar: false,
    windowWidth: 0,
    isSelected: false,
    spotifyToken:'',
    spotifyRefreshToken : '',
    toggleHeader: 0,
    userId:'',
    createdPlaylist:{},
    setUserId: ( newUserId : string ) => set({ userId : newUserId }),
    setToggleHeader: ( newToggleHeader : number ) => set({ toggleHeader : newToggleHeader }),
    setSPotifyRefreshToken: ( newRefreshToken : string ) => set({ spotifyRefreshToken : newRefreshToken }),
    setSpotifyToken: ( newToken : string | null ) => set({ spotifyToken : newToken }),
    setToggleSideBar: ( newToggleSideBar : boolean ) => set({ toggleSideBar : newToggleSideBar }),
    setWindowWidth: ( newWindowWidth : number ) => set({ windowWidth : newWindowWidth}),
    setCreatedPlaylist: ( newCreatedPlaylist : number ) => set({ createdPlaylist : newCreatedPlaylist}),
 }))