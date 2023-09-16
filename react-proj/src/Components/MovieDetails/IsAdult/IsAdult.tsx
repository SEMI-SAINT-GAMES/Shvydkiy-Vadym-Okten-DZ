export const IsAdult = ({adult}: {adult:boolean}) =>{
    return(
        adult ? <div>18+</div> : <div>OK</div>
     )
}