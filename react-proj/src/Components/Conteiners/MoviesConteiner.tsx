import { MoviesPages } from "../../Pagination/Pagination"
import { Movies } from "../Movies/Movies"

export const MoviesConteiner = () => {
    
    return(
       
        <div className="moviesConteiner">
            <h1>POPULAR MOVIES</h1>
            <Movies/>
            <br/>
            <MoviesPages/>
        </div>
        
    )
}