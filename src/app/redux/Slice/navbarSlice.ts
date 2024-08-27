import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavbarState {
  activeButton: string | null; 
}

const initialState: NavbarState = {
  activeButton: null,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActiveButton(state, action: PayloadAction<string | null>) {
      state.activeButton = action.payload;
    },
  },
});

export const { setActiveButton } = navbarSlice.actions;

export default navbarSlice.reducer;
