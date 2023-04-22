import create from 'zustand';

type State={
    toggleSideBar: boolean,
    windowWidth: number,
    isSelected: boolean,
 }
 
 type Action={
     setToggleSideBar: Function,
     setWindowWidth: Function
 }
 
 export const useStateStore = create<State & Action>((set)=>({
     toggleSideBar: false,
     windowWidth: 0,
     isSelected: false,
     setToggleSideBar: ( newToggleSideBar : boolean ) => set({ toggleSideBar : newToggleSideBar }),
     setWindowWidth: ( newWindowWidth : number ) => set({ windowWidth : newWindowWidth})
 }))