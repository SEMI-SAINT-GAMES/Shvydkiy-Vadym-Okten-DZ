import {User} from "./User/User";
import {useEffect} from "react";

export const Users = ({setUsers, users}) => {
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => setUsers(users))
        .catch()

}, [])
return (
    <div>

        {users.map((user, id) =>{
            return(
                <User key = {id} user = {user}/>
            )
        } )}
    </div>
)}