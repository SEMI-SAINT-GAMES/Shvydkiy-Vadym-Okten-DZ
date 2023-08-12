import {createBrowserRouter, Link, Outlet} from "react-router-dom";
import { Users } from "../Components/Users/Users";
import { Locations } from "../Components/Locations/Locations";
import { Header } from "../Components/Header/Header";
import { Episodes } from "../Components/Episodes/Episodes";

export const Routing = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        children:[
            {
                path: "/characters",
                element: <Users/>
            },
            {
                path: "/episodes",
                element: <Episodes/>
            },
            {
                path: "/locations",
                element: <Locations/>
            }
            ]}]
)

