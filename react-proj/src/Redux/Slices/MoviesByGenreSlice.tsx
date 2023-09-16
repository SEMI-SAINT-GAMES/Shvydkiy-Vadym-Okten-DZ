import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IMovie } from "../../Interfaces/MovieInterface"
import { IMoviePage } from "../../Interfaces/MoviePageInterface"
import { movieService } from "../../Services/MovieService"
interface IState {
    moviePage: IMoviePage<IMovie>,
    movies: IMovie[],
    error: null,
    total_results: number
    total_pages: number
}
const initialState: IState = {
    moviePage: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    movies: [],
    error: null,
    total_results: 0,
    total_pages: 0
    
    
}
const getAllMoviesByGenre = createAsyncThunk<IMoviePage<IMovie>, {id:number, page:string}>(
    'MoviesByGenreSlice/getAllMoviesByGenre',
    async ({id, page}, {rejectWithValue})=> {
        try{
          const {data} = await movieService.getMoviesByGenre(id, page)
          return data
          
        }catch(e){
           
        }
    }
)
const MoviesByGenreSlice = createSlice({
    name:'MoviesByGenreSlice',
    initialState,
    reducers:{},
    extraReducers: builder => builder
    .addCase(getAllMoviesByGenre.fulfilled, (state, action) => {
        state.moviePage = action.payload
        state.movies = action.payload.results
        state.total_results = action.payload.total_pages
        state.total_pages = action.payload.total_pages
        
    })
    .addCase(getAllMoviesByGenre.rejected, (state, actions) => {
        state.movies = [];
        state.moviePage = {
            page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
        };
        
    })
  })
  const {reducer: movieByGenreReducer, actions} = MoviesByGenreSlice

  const MovieByGenreActions = {
    ...actions,
    
  }
export {
    MovieByGenreActions,
    movieByGenreReducer,
    getAllMoviesByGenre
}