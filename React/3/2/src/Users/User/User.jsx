export const User = (props) => {
const {user, setUserId} = props
    return(
        <div className="User">
            <p>{user.id}</p>
            <p>{user.name}</p>
            <button onClick={()=>setUserId(user.id)}>See Posts</button>
        </div>
    )
}