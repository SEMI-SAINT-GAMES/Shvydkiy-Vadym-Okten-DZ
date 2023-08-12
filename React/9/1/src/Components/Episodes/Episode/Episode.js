export const Episode = (props) =>{
    const {ep} = props
    return(
        <div className="CharDiv">
         <p>{ep.name}</p>
         <p>{ep.air_date}</p>
         <p>{ep.url}</p>
        </div>
    )}