import { FC, PropsWithChildren, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks"
import { getAllMovies, MovieActions } from "../../Redux/Slices/MovieSlice"
import { movieService } from "../../Services/MovieService"
import { Movie } from "./Movie/Movie"



interface IProps extends PropsWithChildren{

}

export const Movies: FC<IProps>= () => {
     const dispatch = useAppDispatch()
    const {movies, moviePage} = useAppSelector(state => state.movies)
    
    

    useEffect(() => {
        dispatch(getAllMovies())
        
    }, [])

    
    
    console.log(movies)
    console.log(moviePage)
    return(
        <div>
            {movies.map(movie => <Movie key = {movie.id} movie = {movie}/>)}
            <button>Page+</button>
        </div>
    )
}