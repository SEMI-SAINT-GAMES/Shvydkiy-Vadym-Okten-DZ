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
     getMovies: () => apiService.get(`/movie${movieLists.popular}?language=en-US&page=1`, Token)
}
//: IRes<IMoviePage>
export{
   movieService
}