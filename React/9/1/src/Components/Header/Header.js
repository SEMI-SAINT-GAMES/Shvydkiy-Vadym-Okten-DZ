import { Link, Outlet } from "react-router-dom"

export const Header = () =>{
    return (
        <div>
            <div className="Header">
             
                <Link to={"characters"}>characters</Link>
                <Link to={"episodes"}>episodes</Link>
                <Link to={"locations"}>locations</Link>
            </div>
            <Outlet/>

        </div>
    )
}