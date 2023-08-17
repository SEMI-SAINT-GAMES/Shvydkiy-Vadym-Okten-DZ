import { useDispatch, useSelector } from "react-redux"
import { Services } from "../../Servises/Servises"
import { useEffect } from "react"
import { actions } from "../../Redux/Action/Action"

import { Car } from "./Car/Car"

export const Cars = () => {
    const dispatch = useDispatch()
    const cars = useSelector((store) => store.Cars.cars)
    console.log(cars)
    useEffect(() => {
        Services.get()
        .then((value) => value.data)
           .then((data) => dispatch(actions.setCars(data)) )
    }, [])
   
    return(
        <div>
            Cars
            {/* {cars.map(car => <Car key = {car.id} car = {car}/>)} */}
        </div>
    )
}