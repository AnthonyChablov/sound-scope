import create from 'zustand';

type State={
    artistData : [], // Array of objects
    toggleArtists: number, // [0,1,2]
}
 
type Action={
    setArtistData: Function,  
    setToggleArtists: Function, 
}

export const useArtistStore = create<State & Action>((set)=>({
    artistData : [], 
    setArtistData: ( newArtistData : [] ) => set({ artistData : newArtistData }), 
    toggleArtists: 0,
    setToggleArtists: ( newToggleArtists : number ) => set({ toggleArtists : newToggleArtists }),
}))