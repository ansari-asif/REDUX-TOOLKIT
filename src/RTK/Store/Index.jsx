import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "../Slices/UserSlices";

export const store=configureStore({
    reducer:{
        cart:cartReducer
    },
})