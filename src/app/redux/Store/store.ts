import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '@/app/redux/Slice/navbarSlice';
import loadingReducer from '@/app/redux/Slice/loading';
export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    loading:loadingReducer

  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




