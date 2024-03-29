import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import Store from './Redux/Store';
import { Users } from './Components/Users/Users';
import { Routing } from './Routing/Routing';
import { RouterProvider } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
     <RouterProvider router={Routing}/>
    
  </Provider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
