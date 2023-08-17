import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { Services } from "../../Servises/Servises";
import { actions, getCars } from "../Action/Action";

export function UseGetCars(){
    const dispatch = useDispatch;
    useEffect(() => {
        Services.get()
        .then((value) => value.data)
           .then((data) => dispatch(actions.setCars(data)) )
    }, 
    // getCars();
    [])
}