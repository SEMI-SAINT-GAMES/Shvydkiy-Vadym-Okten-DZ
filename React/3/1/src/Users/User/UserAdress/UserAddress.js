export const UserAddress = (props) => {
const adr = props.address

    return(
        <div className="userAddress">
            <h4>Address:</h4>
            <p>{adr.street}</p>
            <p>{adr.suite}</p>
            <p>{adr.city}</p>
            <p>{adr.zipcode}</p>
            <div>
                <h6>GEO:</h6>
                <p>{adr.geo.lat}</p>
                <p>{adr.geo.lng}</p>
            </div>
        </div>
    )
}