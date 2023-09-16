import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IMovieDeteils } from "../../Interfaces/MovieDetailsInterface"
import { IMovie } from "../../Interfaces/MovieInterface"
import { movieService } from "../../Services/MovieService"
interface IState{
    movie: IMovieDeteils 
   
}

const initialState:IState= {
    movie:{
    adult: false,
    backdrop_path: "",
    belongs_to_collection: {
      id: 0,
      name: "",
      poster_path: "",
      backdrop_path: "",
    },
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
}
    
}
    


const getOneMovieById = createAsyncThunk<IMovieDeteils, {id: number}>(
    'MovieSlice/getOneMovieById', 
    async({id}) => {
        try{
            const {data} = await movieService.getMovieById(id)
            return data
        }catch(e){
           return null
        }
    }
)

const MovieDetailsSlice = createSlice({
    name: 'MovieDetailsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
    .addCase(getOneMovieById.fulfilled, (state, action) => {
       state.movie = action.payload
    })
})
const{reducer: movieDetailsReducer, actions} = MovieDetailsSlice
const MovieDetailsAction = {...actions} 
export {
    movieDetailsReducer,
    MovieDetailsAction,
    getOneMovieById
}