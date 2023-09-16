
import { accessToken } from "../Constants/AccessToken"
import { movieLists, pathParams } from "../Constants/Urls"
import { IMovie } from "../Interfaces/MovieInterface"
import { IMoviePage } from "../Interfaces/MoviePageInterface"
import { ITokens } from "../Interfaces/TokensInterface"
import { apiService, IRes } from "./ApiService"
const Token: ITokens = {
    headers: {
     accept: 'application/json',
    Authorization: `Bearer ${accessToken}`
    }
}

const movieService = {
     getMovies: (page: number) => apiService.get(`/movie${movieLists.popular}?language=en-US&page=${page}`, Token,), 
     getMovieById: (id: number) => apiService.get(`/movie/${id}?language=en-US`, Token,),
     getMovieBySearch: (params: string) => apiService.get(`/search/movie?query=${params}&include_adult=true&language=en-US&page=1`)
}
//: IRes<IMoviePage>
export{
   movieService
}