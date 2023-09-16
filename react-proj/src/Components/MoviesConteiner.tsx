
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { MoviesPages } from "../Pagination/Pagination"
import { Movies } from "./Movies/Movies"

export const MoviesConteiner = () => {
    
    return(
       
        <div className="moviesConteiner">
            <Movies/>
            <br/>
            <MoviesPages/>
        </div>
        
    )
}