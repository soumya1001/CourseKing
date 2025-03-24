import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
    totalItems : 0
}
const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        setCartItems(state,value){
            state.cartItems = value.payload
        }
    }
})
export const {setCartItems} = cartSlice.actions
export default cartSlice.reducer