import {useForm} from "react-hook-form";
import {apiService} from "../Servises/apiService";

export const Form = ({comments, setComments}) =>{

    const {register, handleSubmit} = useForm()
    const save = (comment) => {
       apiService.postComments(comment).then(value => value.data).then((value) => {
            setComments(prev => [...prev, value])
            console.log(comment)

        })
    }
    return(
        <form onSubmit={handleSubmit(save)}>
            <label>Title<input type="text" {...register('name')}/></label>
            <label>Body<input type="text" {...register('body')}/></label>
            <label>Email<input type="email" {...register('email')}/></label>
            <button>Add post</button>
        </form>
    )
}