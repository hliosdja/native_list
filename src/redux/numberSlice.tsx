import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
    name: 'number',
    initialState: {
        quantity: 0,
        displayedList: [],
        isInputValid: false
    },
    reducers: {
        setQuantity: (state, action) => {
            state.quantity = action.payload
        },
        setDisplayedList: (state, action) => {
            state.displayedList = action.payload
        },
        setInputValid: (state, action) => {
            state.isInputValid = action.payload
        }
    }
})

export const { setQuantity, setDisplayedList, setInputValid } = numberSlice.actions

export default numberSlice.reducer