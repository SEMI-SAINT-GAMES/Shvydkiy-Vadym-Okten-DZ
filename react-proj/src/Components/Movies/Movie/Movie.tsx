import { FC, PropsWithChildren } from "react"
import { IMovie } from "../../../Interfaces/MovieInterface"
interface IProps extends PropsWithChildren {
    movie: IMovie
}
export const Movie: FC<IProps> = ({movie}) => {
    return(
    <div>
       {movie.title}
       {movie.name}
       {movie.id}
    </div>
    )
}