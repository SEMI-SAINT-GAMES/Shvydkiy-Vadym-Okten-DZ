import {User} from "./User/User";
import {useEffect} from "react";
import {UserService} from "../Services/UserService";
export const Users = ({setUsers, users}) => {
    useEffect(() => {
       UserService.GetUsers()
           .then((value) => value.data)
           .then((data) => setUsers(data))
    }, [])
return (
    <div>
        {users.map((user, id) =>{
            return(
                <User key = {id} user = {user}/>
            )})}
    </div>
)}