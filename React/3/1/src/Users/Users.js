
import User from "./User/User";
import {useContext} from "react";
import {UserContext} from "../App";


const Users = (props) => {
   // const {users} = props
    const {users} = useContext(UserContext)

    return(
           <div className="users">
            {users.map((user, id) => {
             return <User key = {id} user = {user}/>

            })}

         </div>
    )
}
export default Users