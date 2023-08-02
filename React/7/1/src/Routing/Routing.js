import {createBrowserRouter, Link, Outlet} from "react-router-dom";
import {Posts} from "../Posts/Posts";
import {Comments} from "../Comments/Comments";
import {Cars} from "../Cars/Cars";


const Header = () =>{
    return (
        <div>
            <div className="Header">
                <Link to={"posts"}>Posts</Link>
                <Link to={"comments"}>Comments</Link>
                <Link to={"cars"}>Cars</Link>
            </div>
            <Outlet/>

        </div>
    )
}
export const Routing = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        children:[
            {
                path: "/posts",
                element: <Posts/>
            },
            {
                path: "/comments",
                element: <Comments/>
            },
            {
                path: "/cars",
                element: <Cars/>
            }

        ]
    }

])

