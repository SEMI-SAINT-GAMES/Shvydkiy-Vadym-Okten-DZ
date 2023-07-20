import {useEffect, useState} from "react";
import {Car} from "./Car/Car";
import {apiServices} from "../Services/apiServices";

export const Cars = () => {
    const [cars, setCars] = useState([])
    useEffect(() =>{
          apiServices.getCars()
              .then((value) => value.data)
              .then((value) => setCars(value))
    }, [cars])
    return(
        <div>
            {cars.map(car => <Car key = {car.id} car = {car}/>
            )}
        </div>
    )
}