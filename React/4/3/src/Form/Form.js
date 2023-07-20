import {useForm} from "react-hook-form";

export const Form = () => {
    const {register, handleSubmit} = useForm()
    const save = (car) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars`,
            {
                method: 'POST',
                body: JSON.stringify(car),
                headers:{'content-type':'application/json'}


            }).then(value => value.json()).then((value) => {

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