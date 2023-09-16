import { PropsWithChildren, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks"
import { getMovieSearch } from "../../Redux/Slices/SearchMoviesSlice"
import { Movie } from "../Movies/Movie/Movie"



export const SearchMovies = () => {
    const {params} = useParams<{params:string}>()
    const movieParams = params?.slice(1)
    const dispatch = useAppDispatch()
    const {movies, moviePage} = useAppSelector(state => state.movieSearch)

    useEffect(() => {
        dispatch(getMovieSearch({params: movieParams!}))
    }, [movieParams])
    console.log(moviePage)
    return(
        <div className="Movies">
            {movies.map(movie => <Movie key = {movie.id} movie = {movie}/>)}
        </div>
    )
}