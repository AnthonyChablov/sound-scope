import create from 'zustand';

type State={
    toggleArtists: number, //[0,1,2]

}
 
type Action={
    setToggleArtists: Function,
     
}

export const useArtistStore = create<State & Action>((set)=>({
    toggleArtists: 0,
    setToggleArtists: ( newToggleArtists : number ) => set({ toggleArtists : newToggleArtists }),
}))