import { createSlice } from '@reduxjs/toolkit'
import { getPosts as gp } from "../apis/posts";

const initialState = {
    posts: [],
}

export const postsSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setPost } = postsSlice.actions

export default postsSlice.reducer