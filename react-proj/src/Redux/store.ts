import { configureStore } from "@reduxjs/toolkit"
import { movieDetailsReducer } from "./Slices/MovieByIdSlice"
import { movieByGenreReducer } from "./Slices/MoviesByGenreSlice"
import { movieReducer } from "./Slices/MovieSlice"
import { movieSearchReducer } from "./Slices/SearchMoviesSlice"

const store = configureStore({
    reducer:{
        movies: movieReducer,
        movieDetails: movieDetailsReducer,
        movieSearch: movieSearchReducer,
        movieByGenre: movieByGenreReducer
    }

})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export type {
    RootState,
    AppDispatch
}
export {store}