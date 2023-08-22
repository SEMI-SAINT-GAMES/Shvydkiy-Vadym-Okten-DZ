import { useDispatch, useSelector } from "react-redux"
import { Services } from "../../Servises/Servises"
import { useEffect } from "react"
import { actions, getCars } from "../../Redux/Action/Action"

import { Car } from "./Car/Car"





export const Cars = () => {
    const dispatch = useDispatch()
    const cars = useSelector((store) => store.Cars.cars)
    useEffect(() => {
        dispatch(getCars())
    },[])

   
    return(
        <div className="carConteiner">
            Cars
            {cars.map(car => <Car key = {car.id} car = {car}/>)}
        </div>
    )
}