import {apiServices} from "../../Services/apiServices";

export const Car = ({car}) => {

    const deleteCar = () =>{
        apiServices.deleteCar(car.id).then(() => {
                console.log("Car Delited")
        })
    }
    return(
        <div>
            <p>ID: {car.id}</p>
            <p>Car brand: {car.brand}</p>
            <p>Year: {car.year}</p>
            <p>Price: {car.price}</p>
            <div>
                <button onClick={deleteCar}>Delete</button>

            </div>
            <hr/>
        </div>
    )
}