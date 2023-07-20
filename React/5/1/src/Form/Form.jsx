
import {useForm} from "react-hook-form";
import {UserService} from "../Services/UserService";
export const Form = ({users, setUsers}) =>{
    const {register, handleSubmit} = useForm()
    const save = (user) => {
            UserService.PostUser(user).then(value => value.data).then((value) => {
               setUsers(prev => [...prev, value])
            })}
    return(
        <form onSubmit={handleSubmit(save)}>
            <label>Name<input type="text" {...register('name')}/></label>
            <label>Username<input type="text" {...register('username')}/></label>
            <label>Email<input type="email" {...register('email')}/></label>
            <button>save</button>
        </form>
    )}