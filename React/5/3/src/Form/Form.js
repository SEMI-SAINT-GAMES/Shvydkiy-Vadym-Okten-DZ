import {useForm} from "react-hook-form";
import {apiServices} from "../Services/apiServices";

export const Form = () => {
    const {register, handleSubmit} = useForm()
    const save = (car) => {
       apiServices.postCar(car)
           .then(value => value.data)
           .then((value) => {

            console.log(car)

        })
    }
    return(
        <form onSubmit={handleSubmit(save)}>
            <label>Brand<input type="text" {...register('brand')}/></label>
            <label>Year<input type="number" {...register('year')}/></label>
            <label>Price<input type="number" {...register('price')}/></label>
            <button>Add car</button>
        </form>
    )
}