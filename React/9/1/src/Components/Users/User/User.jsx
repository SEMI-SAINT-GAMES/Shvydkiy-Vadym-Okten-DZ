export const User = (props) =>{
    const {user} = props
    return(
        <div className="CharDiv">
         <p>{user.name}</p>
         <img src={user.image}/>
           
          
        </div>
    )}