import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    singlePost: null,
    loading: false,
    error: null
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setSinglePost: (state, action) => {
            state.singlePost = action.payload.post;
        },
        clearSinglePost: (state) => {
            state.singlePost = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    }
})

export const {setPosts, setSinglePost, clearSinglePost, setLoading, setError} = postSlice.actions;
export default postSlice.reducer;