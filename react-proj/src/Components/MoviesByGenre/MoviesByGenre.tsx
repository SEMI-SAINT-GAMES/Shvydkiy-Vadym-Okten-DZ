import { PropsWithChildren, useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks"
import { MoviesPages } from "../../Pagination/Pagination"
import { getAllMoviesByGenre } from "../../Redux/Slices/MoviesByGenreSlice"
import { getAllMovies, MovieActions } from "../../Redux/Slices/MovieSlice"
import { Movie } from "../Movies/Movie/Movie"

export const MoviesByGenre = () => {
    const dispatch = useAppDispatch()
    const {movies, moviePage} = useAppSelector(state => state.movieByGenre)
    const [querry, setQuerry] = useSearchParams({page: `1`})
    const {id} = useParams<{id:string}>()
    const genreId = +id?.slice(1)!
    useEffect(() => {
        dispatch(getAllMoviesByGenre({id: genreId, page:querry.get(`page`)!}))//{page: +querry.get(`page`)!}
        
    }, [querry.get(`page`)])//querry.get(`page`)
    
    return(
        <div>
        <div className="Movies">
            {movies.map(movie => <Movie key = {movie.id} movie = {movie}/>)}
            
        </div>
        <br />
        <MoviesPages pages ={moviePage.total_pages}/>
        </div>
        
    )
}