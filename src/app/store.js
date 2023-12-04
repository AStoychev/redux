import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/countereSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})