import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "../Slices/CartSlices";

export const store=configureStore({
    reducer:{
        allCart:cartReducer
    },
})