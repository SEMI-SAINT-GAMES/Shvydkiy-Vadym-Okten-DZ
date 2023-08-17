
import { Services } from "../../Servises/Servises";
import { actionTypes } from "../Reduser/Reduser";


export const actions ={
    setCars: (data) => ({type: actionTypes.SET_CARS, payload: data}) 
    
}
export const getCars = () => (dispatch) => {
    Services.get()
    .then((value) => value.data)
       .then((data) => dispatch(actions.setCars(data)) )
}


