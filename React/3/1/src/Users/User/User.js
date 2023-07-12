

import {UserDetails} from "./UserDetails/UserDetails";
import {UserAddress} from "./UserAdress/UserAddress";

import {Company} from "./Company/Company";
const User = (props) =>{
    const {user} = props
    return(
        <div className= "userDiv">
            <UserDetails
               id = {user.id}
               name = {user.name}
               email = {user.email}
               phone = {user.phone}
               website = {user.website}
               username = {user.username}
           />
            <div className="addComp">
            <UserAddress address = {user.address}/>
            <Company company = {user.company}/>
            </div>
        </div>)}
export default User