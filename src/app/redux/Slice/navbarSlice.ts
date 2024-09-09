import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavbarState {
  activeButton: boolean; 
}

const initialState: NavbarState = {
  activeButton: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActiveButton(state, action: PayloadAction<boolean >) {
      state.activeButton = action.payload;
    },
  },
});

export const { setActiveButton } = navbarSlice.actions;

export default navbarSlice.reducer;
