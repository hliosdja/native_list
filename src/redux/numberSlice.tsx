import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
    name: 'number',
    initialState: {
        quantity: 0,
        displayedList: [],
        masterList: [
            {id: 0, item: 'first'},
            {id: 1, item: 'second'},
            {id: 2, item: 'third'},
            {id: 3, item: 'fourth'},
            {id: 4, item: 'fifth'},
        ],
        isInputValid: false,
        indexToScroll: 0
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
        },
        setIndexToScroll: (state, action) => {
            state.indexToScroll = action.payload
        },
        setMasterList: (state, action) => {
            state.masterList = action.payload
        }
    }
})

export const { setQuantity, setDisplayedList, setInputValid, setIndexToScroll, setMasterList } = numberSlice.actions

export default numberSlice.reducer