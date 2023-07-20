export const User = (props) =>{
    const {user} = props
    return(
        <div>
         <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <hr/>
        </div>
    )
}