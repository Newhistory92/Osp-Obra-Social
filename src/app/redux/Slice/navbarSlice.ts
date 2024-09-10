import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavbarState {
  activeButton: boolean; 
  mostrarDelegacion:boolean
}

const initialState: NavbarState = {
  activeButton: false,
  mostrarDelegacion: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActiveButton(state, action: PayloadAction<boolean >) {
      state.activeButton = action.payload;
    },
    setMostrarDelegacion(state, action:PayloadAction<boolean >)  {
      console.log("setMostrarDelegacion: ", action.payload);
      state.mostrarDelegacion = action.payload; 
    },
  },
});

export const { setActiveButton,setMostrarDelegacion } = navbarSlice.actions;

export default navbarSlice.reducer;
