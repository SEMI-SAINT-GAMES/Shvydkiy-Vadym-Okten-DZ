import { useEffect, useState } from "react"
import { IGenreObject } from "../../Interfaces/GenreInterface"
import { movieService } from "../../Services/MovieService"
import { Genre } from "./Genre/Genre"

export const Genres = () => {
    const[genresObject, setGenresObject] = useState<IGenreObject>({genres:[]})
     useEffect(() => {
        movieService.getGenres()
        .then((value) => value.data)
        .then((data) => setGenresObject(data))
     },[genresObject])
     
    return(
        <div className="genres">
          {genresObject.genres.map(genre => <Genre key = {genre.id} genre = {genre}/>)}
        </div>
    )
}