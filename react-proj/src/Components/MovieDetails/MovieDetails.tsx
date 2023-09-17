
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { imageBaseURL } from "../../Constants/Urls"
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks"
import { IGener } from "../../Interfaces/GenreInterface"
import { getOneMovieById } from "../../Redux/Slices/MovieByIdSlice"
import { Raiting } from "../Movies/Movie/Raiting/Raiting"
import { GenresInDeteils } from "./GenresInDeteils/GenresInDeteils"
import { IsAdult } from "./IsAdult/IsAdult"



export const MovieDetails = () => { 
     const {id} = useParams<{id: string}>()
     const movieId = +id?.slice(1)!

    const dispatch = useAppDispatch()
    const {movie} = useAppSelector(state => state.movieDetails)
    useEffect(() => {
        dispatch(getOneMovieById({id: movieId}))
        }, [])
    const getYear = (year:string) =>{
         const parts = year.split(`-`)
         const onlyYear = parts[0]
         return onlyYear
    }
    console.log(movie)
    const pageStyle = {
        width: '100%', 
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        backdropFilter: 'blur(100px)', 

    }

    const genres:IGener[] = movie.genres
    return(
        <div>
            <div className="MovieDeteilsPage"  style={pageStyle}>
            <div className="MovieDetailsMain">
                <img src={`${imageBaseURL}${movie.poster_path}`} alt="NoPhoto"></img>
                <div className="MovieInfo">
                    <h1>{movie.title}</h1>
                    <h2>{getYear(movie.release_date)}</h2>
                    <div className="MovieDeteilsJenres"></div>
                    <h4>{movie.tagline}</h4>
                    <p>{movie.overview}</p>
                    <Raiting rate = {movie.vote_average}/>
                    <br />
                    <div className="GenresInDeteils">
                {genres.map(genre => <GenresInDeteils key={genre.id} genre={genre}/>)}
                </div>
                <br />
                </div>
                </div>
               
                
            </div>
        </div>
    )
}