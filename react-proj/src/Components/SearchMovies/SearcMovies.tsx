import { PropsWithChildren, useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks"
import { MoviesPages } from "../../Pagination/Pagination"
import { getMovieSearch } from "../../Redux/Slices/SearchMoviesSlice"
import { Movie } from "../Movies/Movie/Movie"



export const SearchMovies = () => {
    const {params} = useParams<{params:string}>()
    const movieParams = params?.slice(1)
    const dispatch = useAppDispatch()
    const {movies, moviePage} = useAppSelector(state => state.movieSearch)
    const [querry, setQuerry] = useSearchParams({page: `1`})
    useEffect(() => {
        dispatch(getMovieSearch({params: movieParams!, page: querry.get(`page`)!}))
    }, [querry.get(`page`)])
    console.log(moviePage)
    return(
        <div>
        {movieParams === "" ? (<div className="sss">No Results Found</div>) : (<div className="Movies">
            {movies.map(movie => <Movie key = {movie.id} movie = {movie}/>)}
        </div>)}
        <br/>
        <MoviesPages pages={moviePage.total_pages}/>
        </div>
    )
}