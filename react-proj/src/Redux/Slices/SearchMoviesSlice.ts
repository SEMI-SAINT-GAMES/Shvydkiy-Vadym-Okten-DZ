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
const getMovieSearch = createAsyncThunk<IMoviePage<IMovie>, {params: string}>(
    'MovieSlice/getMovieSearch',
    async ({params}, {rejectWithValue})=> {
        try{
          const {data} = await movieService.getMovieBySearch(params)
          return data
          
        }catch(e){
           
        }
    }
)
const MovieSearchSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder => builder
    .addCase(getMovieSearch.fulfilled, (state, action) => {
        state.moviePage = action.payload
        state.movies = action.payload.results
        state.total_results = action.payload.total_pages
        state.total_pages = action.payload.total_pages
        
    })
    .addCase(getMovieSearch.rejected, (state, actions) => {
        state.movies = [];
        state.moviePage = {
            page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
        };
        
    })
  })
  const {reducer: movieSearchReducer, actions} = MovieSearchSlice

  const MovieSearchActions = {
    ...actions,
    
  }
export {
  MovieSearchActions,
  movieSearchReducer,
  getMovieSearch
}
export {}