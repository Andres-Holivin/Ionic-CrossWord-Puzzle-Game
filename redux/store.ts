import { configureStore } from '@reduxjs/toolkit'
import checkReducer from './features/checkSlice'

export const store = configureStore({
    reducer: {
        check: checkReducer,
    },
    // devTools: process.env.APP_ENV === "Production" ? false : true,
})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch