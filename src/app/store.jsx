import {configureStore} from "@reduxjs/toolkit"
import carReducer from "../features/car/carSlise"

export const store=configureStore({
    reducer:{
        car:carReducer
    }
})