import { MoviesPages } from "../../Pagination/Pagination"
import { Movies } from "../Movies/Movies"
import { MoviesByGenre } from "../MoviesByGenre/MoviesByGenre"

export const MoviesByGenreConteiner = () => {
    
    return(
       
        <div className="moviesConteiner">
            <MoviesByGenre/>
        </div>
        
    )
}