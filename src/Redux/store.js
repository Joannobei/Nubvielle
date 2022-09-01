import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from './rootSlice'
export const store = configureStore({
    reducer:{
        expenses: expensesReducer,
    }
})



