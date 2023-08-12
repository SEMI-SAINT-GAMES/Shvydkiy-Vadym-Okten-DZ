import {User} from "./User/User";
import {useEffect} from "react";

import { Actions } from "../../Redux/Actions/Actions";
import { apiService } from "../../Servises/apiService";
import { useDispatch, useSelector } from "react-redux";

export const Users = ({}) => {
    const dispatch = useDispatch()
    const char = useSelector((store) => store.characters.results)
    console.log(char)
    useEffect(() => {
       apiService.getCh()
           .then((value) => value.data)
           .then((data) => dispatch(Actions.setCh(data)) )
           
    }, [])
return (
    <div className="MainDivChar">
        {char.map((user, id) =>{
            return(
              
                <User key = {id} user = {user}/>
         
            )})}
    </div>
)}