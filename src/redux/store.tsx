import { configureStore } from '@reduxjs/toolkit'
import { numberSlice } from './numberSlice'

export default configureStore({
    reducer: {
        num: numberSlice.reducer
    }
})