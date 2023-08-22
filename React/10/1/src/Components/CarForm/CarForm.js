import { useDispatch } from "react-redux"
import { Services } from "../../Servises/Servises";
import { useForm } from "react-hook-form";
import { saveCar } from "../../Redux/Action/Action";

export const CarForm = () => {
    const {register, reset, setValue, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const Save = (data) => {
       dispatch(saveCar(data))
        // reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(Save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Save</button>
            </form>
        </div>
    )
}