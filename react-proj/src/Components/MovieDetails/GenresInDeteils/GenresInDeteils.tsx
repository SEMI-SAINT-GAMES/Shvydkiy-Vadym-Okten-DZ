import { Link } from "react-router-dom"
export interface Igenre{
    id:number;
    name:string
}
export const GenresInDeteils = ({genre}:{genre:Igenre}) => {
    return(
        <Link to ={`../../moviesByGenre/:${genre.id}`} className="LinksGenres">
        <div className="GenreInDeteils">
           {genre.name}
        </div>
        </Link>
    )
}