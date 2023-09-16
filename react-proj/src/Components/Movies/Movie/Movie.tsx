import { Rating } from "@mui/material"
import { FC, PropsWithChildren } from "react"
import { Link } from "react-router-dom"
import { imageBaseURL } from "../../../Constants/Urls"
import { IMovie } from "../../../Interfaces/MovieInterface"
import { Raiting } from "./Raiting/Raiting"
interface IProps extends PropsWithChildren {
    movie: IMovie
}
export const Movie: FC<IProps> = ({movie}) => {
    return(
        <Link to={`../movie-details/:${movie.id}`}> 
    <div className="movie">
        
        <img src={imageBaseURL + movie.poster_path} alt="Фото фільма 1"></img>
      <div className="movieTitle"><h2>{movie.title}</h2></div>
       {/* {movie.name} */}
      <Raiting rate = {movie.vote_average}/>
      
    </div>
    </Link>
    )
}