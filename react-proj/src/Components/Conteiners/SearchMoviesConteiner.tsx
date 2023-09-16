import { MoviesPages } from "../../Pagination/Pagination"
import { SearchMovies } from "../SearchMovies/SearcMovies"


export const SearcMoviesConteiner = () => {
    
    return(
       
        <div className="moviesConteiner">
            <SearchMovies/>
            <br/>
            <MoviesPages/>
        </div>
        
    )
}