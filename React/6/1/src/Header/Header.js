import {Link} from "react-router-dom";
import {Routs} from "../Links/Links";

const links = [
    {
        path: "/",
        label: 'Main'
    },
    {
        path: Routs.TODOS,
        label: "To Do's"
    },
    {
        path: Routs.ALBUMS,
        label: 'Albums'
    },
    {
        path: "/comments",
        label: 'Commenst'
    }]
export const Header = () => {
    return (<div className='header'>
        { links.map((link) =>{
            return(
                <Link to={link.path} style={{color:"yellow"}}>{link.label}</Link>
            )
        })}
</div>)
}
