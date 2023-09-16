import { createBrowserRouter, Navigate } from "react-router-dom"
import { Genres } from "../Components/Genres/Genres"
import { MovieDetails } from "../Components/MovieDetails/MovieDetails"
import { MoviesByGenre } from "../Components/MoviesByGenre/MoviesByGenre"
import { MoviesConteiner } from "../Components/Conteiners/MoviesConteiner"
import { SearchMovies } from "../Components/SearchMovies/SearcMovies"
import { MainLayout } from "../Layouts/MainLayout"
import { MoviesByGenreConteiner } from "../Components/Conteiners/MoviesByGenreConteiner"
import { SearcMoviesConteiner } from "../Components/Conteiners/SearchMoviesConteiner"

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
              element: <SearcMoviesConteiner/>
            },
            {
              path: `genres`,
              element: <Genres/>
            },
            {
              path: `moviesByGenre/:id`,
              element:<MoviesByGenreConteiner/>
            }
        ]
        
        
    }
  ])

export{
  router
}