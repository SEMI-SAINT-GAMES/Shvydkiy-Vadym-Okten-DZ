import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IMovie } from "../../Interfaces/MovieInterface"
import { movieService } from "../../Services/MovieService"
// interface IState {
//     movies: {},
//     error: null
    
// }

const initialState = {
    movies: {},
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
        state.movies = action.payload
        
    })
    .addCase(getAllMovies.rejected, (state, actions) => {
        state.movies = [];
        
        
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