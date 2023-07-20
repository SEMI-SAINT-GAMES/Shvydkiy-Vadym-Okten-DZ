import {useEffect, useState} from "react";
import {Car} from "./Car/Car";

export const Cars = () => {
    const [cars, setCars] = useState([])
    useEffect(() =>{
          fetch('http://owu.linkpc.net/carsAPI/v1/cars')
              .then((value) => value.json())
              .then((value) => setCars(value))
    }, [cars])
    return(
        <div>
            {cars.map(car => <Car key = {car.id} car = {car}/>
            )}
        </div>
    )
}