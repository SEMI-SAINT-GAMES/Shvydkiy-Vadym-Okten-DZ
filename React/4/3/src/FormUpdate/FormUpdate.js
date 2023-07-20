import {useForm} from "react-hook-form";

export const FormUpdate = () => {
    const {register, handleSubmit} = useForm()
    const updateCar = (car) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${car.id}`,
            {
                method: 'PUT',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(car)
            }).then(value => value.json()).then(() => {})
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