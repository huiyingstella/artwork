import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../Store/User" 


export default configureStore({
    reducer:{
        user:userReducer
    }
})