
export const UserDetails = (props) =>{
    const user = props

    return(
        <div className="userDetails">
            <h2>USER №{user.id}</h2>
            <h2>{user.name}</h2>
            <p className="username"> @{user.username}</p>
            <p>Phone: +{user.phone}</p>
            <p>{user.website}</p>
            <p>E-mail: {user.email}</p>
        </div>
    )
}