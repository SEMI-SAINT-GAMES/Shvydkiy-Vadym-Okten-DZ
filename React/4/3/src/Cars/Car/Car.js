export const Car = ({car}) => {

    const deleteCar = () =>{
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${car.id}`,
            {
                method: 'DELETE'
            }).then(() => {
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