export const Location = (props) =>{
    const {loc} = props
    
    return(
        <div className="CharDiv">
         <p>{loc.name}</p>
         <p>{loc.type}</p>
        </div>
    )}