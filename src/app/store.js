import { configureStore } from "@reduxjs/toolkit";
import postsReuccer from '../features/posts/postsSlice'

export const store = configureStore({
    reducer: {
        posts: postsReuccer
    }
})