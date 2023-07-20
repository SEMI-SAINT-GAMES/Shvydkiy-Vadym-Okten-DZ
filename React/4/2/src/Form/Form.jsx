import {useForm} from "react-hook-form";

export const Form = ({comments, setComments}) =>{

    const {register, handleSubmit} = useForm()
    const save = (comment) => {
        fetch('https://jsonplaceholder.typicode.com/comments',
            {
                method: 'POST',
                body: JSON.stringify(comment),
                headers:{'content-type':'application/json'}


            }).then(value => value.json()).then((value) => {
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