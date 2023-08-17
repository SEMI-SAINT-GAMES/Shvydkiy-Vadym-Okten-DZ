import { useDispatch, useSelector } from "react-redux"
import { Services } from "../../Servises/Servises"
import { useEffect } from "react"
import { actions } from "../../Redux/Action/Action"

import { Car } from "./Car/Car"
import { UseGetCars } from "../../Redux/UseGetCars/UseGetCars"


export const Cars = () => {
    const dispatch = useDispatch()
    const cars = useSelector((store) => store.Cars.cars)
    // useEffect(() => {
    //     Services.get()
    //     .then((value) => value.data)
    //        .then((data) => dispatch(actions.setCars(data)) )
    // },[])
   UseGetCars()
   
    return(
        <div className="carConteiner">
            Cars
            {cars.map(car => <Car key = {car.id} car = {car}/>)}
        </div>
    )
}