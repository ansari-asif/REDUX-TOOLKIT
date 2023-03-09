import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "../Slices/CartSlices";
import persistedReducer from './persistedReducer';
import { persistStore } from 'redux-persist';

export const store = configureStore({
    reducer: persistedReducer,
  });
  
  export const persistor = persistStore(store);

// export const store=configureStore({
//     reducer:{
//         allCart:cartReducer
//     },
// })