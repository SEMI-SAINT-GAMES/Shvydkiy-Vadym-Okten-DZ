import { Rating } from "@mui/material"
import { FC, PropsWithChildren } from "react"
import { Link } from "react-router-dom"
import { imageBaseURL } from "../../../Constants/Urls"
import { IMovie } from "../../../Interfaces/MovieInterface"
import { TruncatedText } from "../../TruncatedText/TruncatedText"
import { Raiting } from "./Raiting/Raiting"
interface IProps extends PropsWithChildren {
    movie: IMovie
}
export const Movie: FC<IProps> = ({movie}) => {
    return(
        <Link to={`../movie-details/:${movie.id}`} style={{ textDecoration: 'none' }}> 
    <div className="movie">
        
        <img src={imageBaseURL + movie.poster_path} alt="NoPhoto"></img>
      <div className="movieTitle"><TruncatedText text={movie.title} maxLength={30} /></div>
       {/* {movie.name} */}
      <Raiting rate = {movie.vote_average}/>
      
    </div>
    </Link>
    )
}