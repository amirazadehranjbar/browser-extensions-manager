import { configureStore } from '@reduxjs/toolkit'
import extentionReducer from "./features/extentionReducer.js";

export const store = configureStore({
    reducer: {
        extension:extentionReducer,
    },
})