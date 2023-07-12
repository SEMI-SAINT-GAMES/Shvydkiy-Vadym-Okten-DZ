import {useEffect, useState} from "react";
import {User} from "./User/User";

export const Users = ({setUserId}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => setUsers(users))
        .catch()
}, [])
return(
    <>
        {users.map((user, id) => {
            return <User key = {id} user ={user} setUserId = {setUserId}/>
        })}
    </>
)
}