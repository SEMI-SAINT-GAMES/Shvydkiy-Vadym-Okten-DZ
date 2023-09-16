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

const getAllMovies = createAsyncThunk<IMoviePage<IMovie>, {page:number}>(
    'MovieSlice/getAllMovies',
    async ({page}, {rejectWithValue})=> {
        try{
          const {data} = await movieService.getMovies(page)
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
        state.total_results = action.payload.total_pages
        state.total_pages = action.payload.total_pages
        
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