import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebar'
import loaderReducer from './loader'
import postsReducer from './posts'
import dialogReducer from './dialogs'

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        loader: loaderReducer,
        posts: postsReducer,
        dialog: dialogReducer
    },
})