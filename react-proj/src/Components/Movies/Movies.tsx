import { FC, PropsWithChildren, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks"
import { MoviesPages } from "../../Pagination/Pagination"
import { getAllMovies, MovieActions } from "../../Redux/Slices/MovieSlice"
import { Movie } from "./Movie/Movie"



interface IProps extends PropsWithChildren{

}


export const Movies: FC<IProps>= () => {
     const dispatch = useAppDispatch()
    const {movies, moviePage} = useAppSelector(state => state.movies)
    const [querry, setQuerry] = useSearchParams({page: `1`})
    useEffect(() => {
        dispatch(getAllMovies({page: +querry.get(`page`)!}))
        
    }, [querry.get(`page`)])
    console.log(movies)
    return(
        <div>
        <div className="Movies">
            {movies.map(movie => <Movie key = {movie.id} movie = {movie}/>)}
            
        </div>
        <br />
        <MoviesPages pages = {500}/>
        </div>
    )
}