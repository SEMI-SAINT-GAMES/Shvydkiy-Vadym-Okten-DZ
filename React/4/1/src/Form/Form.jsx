import {useForm} from "react-hook-form";
export const Form = ({users, setUsers}) =>{

    const {register, handleSubmit} = useForm()
    const save = (user) => {
        fetch('https://jsonplaceholder.typicode.com/users',
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers:{'content-type':'application/json'}
            }).then(value => value.json()).then((value) => {
               setUsers(prev => [...prev, value])
            console.log(user)
            })}
    return(
        <form onSubmit={handleSubmit(save)}>
            <label>Name<input type="text" {...register('name')}/></label>
            <label>Username<input type="text" {...register('username')}/></label>
            <label>Email<input type="email" {...register('email')}/></label>
            <button>save</button>
        </form>
    )}