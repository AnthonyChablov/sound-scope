import create from 'zustand';

type State={
    toggleSideBar: boolean,
    windowWidth: number,
    isSelected: boolean,
    spotifyToken: string,
 }
 
 type Action={
     setToggleSideBar: Function,
     setWindowWidth: Function,
     setSpotifyToken: Function,
 }
 
 export const useStateStore = create<State & Action>((set)=>({
     toggleSideBar: false,
     windowWidth: 0,
     isSelected: false,
     spotifyToken:'',
     setSpotifyToken: ( newToken : string ) => set({ spotifyToken : newToken }),
     setToggleSideBar: ( newToggleSideBar : boolean ) => set({ toggleSideBar : newToggleSideBar }),
     setWindowWidth: ( newWindowWidth : number ) => set({ windowWidth : newWindowWidth})
 }))