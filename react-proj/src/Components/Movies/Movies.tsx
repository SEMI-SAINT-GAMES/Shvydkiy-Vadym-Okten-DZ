import { FC, PropsWithChildren, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks"
import { getAllMovies, MovieActions } from "../../Redux/Slices/MovieSlice"
import { movieService } from "../../Services/MovieService"



interface IProps extends PropsWithChildren{

}

export const Movies: FC<IProps>= () => {
     const dispatch = useAppDispatch()
    const {movies} = useAppSelector(state => state.movies)
    

    useEffect(() => {
        dispatch(getAllMovies())
        
    }, [])
    console.log(movies)
    return(
        <div>
            Movie
        </div>
    )
}