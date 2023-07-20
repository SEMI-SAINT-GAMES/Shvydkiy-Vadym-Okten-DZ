// const initialState = {
//     name:'',
//     username:'',
//     email:''
// }
// const [user, setUser] = useState(initialState)
// const inputHandle = (e) =>{
//       setUser(prevState => ({...prevState, [e.target.name]: e.target.value}))
// }
// const addUser = (e) => {
//     e.preventDefault()
//     fetch('https://jsonplaceholder.typicode.com/users',
//         {headers:{'content-type':'application/json'},
//         body:JSON.stringify(user),
//             method: 'POST'
//         }).then(value => value.json()).then(() => {
//             setOnAdd(prevState => !prevState)
//         // setUser(initialState)
//         })
// }
// return(
//     <form onSubmit={addUser}>
//         <div><label>Name<input type="text" value={user.name} name={'name'} onChange={inputHandle}/></label></div>
//         <div><label>Username<input type="text" value={user.username} name={'username'} onChange={inputHandle}/></label></div>
//         <div><label>Email<input type="text" value={user.email} name={'email'} onChange={inputHandle}/></label></div>
//         <button>Add User</button>
//     </form>
// )
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

        })
    }
    return(
        <form onSubmit={handleSubmit(save)}>
            <label>Name<input type="text" {...register('name')}/></label>
            <label>Username<input type="text" {...register('username')}/></label>
            <label>Email<input type="email" {...register('email')}/></label>
            <button>save</button>
        </form>
    )
}