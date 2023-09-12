import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IMovie } from "../../Interfaces/MovieInterface"
import { IMoviePage } from "../../Interfaces/MoviePageInterface"
import { movieService } from "../../Services/MovieService"
interface IState {
    moviePage: IMoviePage,
    movies: IMovie[],
    error: null
    
}

const initialState: IState = {
    moviePage: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    movies: [],
    error: null
    
    
}

const getAllMovies = createAsyncThunk(
    'MovieSlice/getAllMovies',
    async ()=> {
        try{
          const {data} = await movieService.getMovies()
          return data
          
        }catch(e){
           
        }
    }
)


const MovieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder => builder
    .addCase(getAllMovies.fulfilled, (state, action) => {
        state.moviePage = action.payload
        state.movies = action.payload.results
        
    })
    .addCase(getAllMovies.rejected, (state, actions) => {
        state.movies = [];
        state.moviePage = {
            page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
        };
        
    })
  })
  const {reducer: movieReducer, actions} = MovieSlice

  const MovieActions = {
    ...actions,
    
  }
export {
  MovieActions,
  movieReducer,
  getAllMovies
}