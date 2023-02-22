import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../ProductData";

const initialState={
    cart:[],
    items:ProductData,
    totalQuantity:0,
    totalPrice:0,
};

export const cartSlice=createSlice({
    name:"allCart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload);
        }        
    }
})

export const {addToCart}=cartSlice.actions;
export default cartSlice.reducer;
