import { FC, PropsWithChildren } from "react"
import { Link } from "react-router-dom"
import { IGener } from "../../../Interfaces/GenreInterface"

interface IProps extends PropsWithChildren{
     genre: IGener
}
export const Genre: FC<IProps> = ({genre}) => {
    return(
        <Link to={`../moviesByGenre/:${genre.id}`} className="links">
        <div className="genre">
            {genre.name}
          </div>
        </Link>
    )
}