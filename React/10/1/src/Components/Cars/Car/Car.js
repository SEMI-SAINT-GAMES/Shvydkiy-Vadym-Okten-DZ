export const Car = ({car}) =>{
    const {id, brand, price, year} = car
    return (
        <div>
            <p>{car.brand}</p>
        </div>
    )
}