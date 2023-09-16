import { createBrowserRouter, Navigate } from "react-router-dom"
import { MovieDetails } from "../Components/MovieDetails/MovieDetails"
import { MoviesConteiner } from "../Components/MoviesConteiner"
import { SearchMovies } from "../Components/SearchMovies/SearcMovies"
import { MainLayout } from "../Layouts/MainLayout"

const router = createBrowserRouter([
    {
        path:``,
        element: <MainLayout/>,
        children: [
          
          
            {
              index: true,
              element: <Navigate to ={`popular`}/>
            }, 
            {
              path:'popular', 
              element: <MoviesConteiner/>
            },
            {
              path: `movie-details/:id`,
              element: <MovieDetails/>
            },
            {
              path: `search/:params`,
              element: <SearchMovies/>
            }
        ]
        
        
    }
  ])

export{
  router
}