
import { accessToken } from "../Constants/AccessToken"
import { movieLists, pathParams } from "../Constants/Urls"
import { ITokens } from "../Interfaces/TokensInterface"
import { apiService, IRes } from "./ApiService"
const Token: ITokens = {
    headers: {
     accept: 'application/json',
    Authorization: `Bearer ${accessToken}`
    }
}

const movieService = {
     getMovies: (page: number) => apiService.get(`/movie${movieLists.popular}?language=en-US&page=${page}`, Token), //Token,
     getMovieById: (id: number) => apiService.get(`/movie/${id}?language=en-US`, Token,),
     getMovieBySearch: (params: string, page:string) => apiService.get(`/search/movie?query=${params}&include_adult=true&language=en-US&page=${page}`, Token),
     getGenres: () => apiService.get(`https://api.themoviedb.org/3/genre/movie/list?language=en`, Token),
     getMoviesByGenre: (id:number, page:string) => apiService.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${id}`, Token)
}

//: IRes<IMoviePage>
export{
   movieService
}