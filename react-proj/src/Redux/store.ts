import { configureStore } from "@reduxjs/toolkit"
import { movieReducer } from "./Slices/MovieSlice"

const store = configureStore({
    reducer:{
        movies: movieReducer
    }

})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export type {
    RootState,
    AppDispatch
}
export {store}