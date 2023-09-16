import React, { createContext, useContext, useState } from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { Provider, useDispatch } from 'react-redux';
import { store } from './Redux/store';
import {RouterProvider } from 'react-router-dom';
import { router } from './Routing/router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
interface ThemeContextType {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  }
export const DarkThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const App = () => {
    const [isDark, setIsDark] = useState(false)
    const dispatch = useDispatch()
//     const theme = createTheme({
//   palette:{
//       mode:!isDark ? `dark` : `light`
//   },
// })
// const toggleDarkMode = () => {
//     dispatch(toggleDarkMode())
//   };


    return (
        
    // <ThemeProvider theme={theme}>
    //    <CssBaseline/>
          
            <RouterProvider router={router}/>
         
    // </ThemeProvider>
   
    
        
    )
}