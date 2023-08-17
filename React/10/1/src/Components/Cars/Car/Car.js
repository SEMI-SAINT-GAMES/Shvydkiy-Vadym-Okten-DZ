export const Car = ({car}) =>{
    const {id, brand, price, year} = car
    return (
        <div className="carDiv">
             <p>{car.id}</p>
            <p>{car.brand}</p>
            <p>{car.year}</p>
            <p>{car.price}</p>
        </div>
    )
}