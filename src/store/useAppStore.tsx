import create from 'zustand';
import { IPlaylist } from '@/models/playlist';

type State={
  toggleSideBar: boolean,
  sideBarAnchor: "left" | "bottom" | "right" | "top" | undefined,
  windowWidth: number,
  isSelected: boolean,
  spotifyToken: string ,
  spotifyRefreshToken: string,
  toggleHeader: number,
  userId: string ,
  createdPlaylist : IPlaylist | null,
  playlistId: string,
}
 
type Action={
   setToggleSideBar: Function,
   setSideBarAnchor : Function,
   setWindowWidth: Function,
   setSpotifyToken: Function,
   setSPotifyRefreshToken: Function,
   setToggleHeader: Function,
   setUserId: Function,
   setCreatedPlaylist : Function,
   setPlaylistId : Function,
}
 
export const useStateStore = create<State & Action>((set)=>({
  toggleSideBar: false,
  windowWidth: 0,
  isSelected: false,
  spotifyToken:'',
  spotifyRefreshToken : '',
  toggleHeader: 0,
  userId:'',
  createdPlaylist: null,
  playlistId: '',
  sideBarAnchor: undefined,
  setUserId: ( newUserId : string ) => set({ userId : newUserId }),
  setToggleHeader: ( newToggleHeader : number ) => set({ toggleHeader : newToggleHeader }),
  setSPotifyRefreshToken: ( newRefreshToken : string ) => set({ spotifyRefreshToken : newRefreshToken }),
  setSpotifyToken: ( newToken : string  ) => set({ spotifyToken : newToken }),
  setToggleSideBar: ( newToggleSideBar : boolean ) => set({ toggleSideBar : newToggleSideBar }),
  setWindowWidth: ( newWindowWidth : number ) => set({ windowWidth : newWindowWidth}),
  setCreatedPlaylist: ( newCreatedPlaylist : IPlaylist | null ) => set({ createdPlaylist : newCreatedPlaylist}),
  setPlaylistId: ( newPlaylistId :string ) => set({ playlistId : newPlaylistId}),
  setSideBarAnchor: ( newSideBarAnchor : "left" | "bottom" | "right" | "top" | undefined ) => set({ sideBarAnchor : newSideBarAnchor}),
}))