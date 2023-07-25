import {createBrowserRouter, Outlet} from "react-router-dom";
import {Todos} from "../ToDos/Todos";
import {Routs} from "../Links/Links";
import { Link } from 'react-router-dom';
import {Header} from "../Header/Header";
import {Albums} from "../Albums/Albums";
import {Comments} from "../Comments/Comments";
import {Post} from "../Post/Post";

const MainPage = () =>{
    return (
        <div className="mainPage" >
           <Header/>
            <Outlet/>
        </div>

)}
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        children:[
            {
                path: Routs.TODOS,
                element: <Todos/>
            },
            {
                path: Routs.ALBUMS,
                element: <Albums/>
            },
            {
                path: Routs.COMMENTS,
                element: <Comments/>,
                children:[{
                    path: "posts/:postId",
                    element: <Post/>
                }]
            }
        ]
    }

])