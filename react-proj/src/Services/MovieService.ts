import { accessToken } from "../Constants/AccessToken"
import { movieLists, pathParams } from "../Constants/Urls"
import { IMovie } from "../Interfaces/MovieInterface"
import { ITokens } from "../Interfaces/TokensInterface"
import { apiService, IRes } from "./ApiService"
const Token: ITokens = {
    headers: {
     accept: 'application/json',
    Authorization: `Bearer ${accessToken}`
    }
}

const movieService = {
     getMovies: () => apiService.get(`${movieLists.trending}/all${pathParams.week}`, Token)
}

export{
   movieService
}