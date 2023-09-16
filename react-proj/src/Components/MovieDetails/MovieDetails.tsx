import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks"
import { getOneMovieById } from "../../Redux/Slices/MovieByIdSlice"
import { IsAdult } from "./IsAdult/IsAdult"


export const MovieDetails = () => { 
     const {id} = useParams<{id: string}>()
     const movieId = +id?.slice(1)!

    const dispatch = useAppDispatch()
    const {movie} = useAppSelector(state => state.movieDetails)
    useEffect(() => {
        dispatch(getOneMovieById({id: movieId}))
        }, [])
    
    console.log(movie)
    return(
        <div>
          {movie.title}
          <IsAdult adult ={movie.adult}/>
        </div>
    )
}