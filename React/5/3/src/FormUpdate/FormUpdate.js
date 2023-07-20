import {useForm} from "react-hook-form";
import {apiServices} from "../Services/apiServices";

export const FormUpdate = () => {
    const {register, handleSubmit} = useForm()
    const updateCar = (car) => {
        apiServices.updateCar(car)
            .then(value => value.data)
            .then(() => {})
    }
    return(
        <form onSubmit={handleSubmit(updateCar)}>
            <label>ID<input type="number" {...register('id')}/></label>
            <label>New Brand<input type="text" {...register('brand')}/></label>
            <label>New Year<input type="number" {...register('year')}/></label>
            <label>New Price<input type="number" {...register('price')}/></label>
            <button>Update</button>
        </form>
    )
}