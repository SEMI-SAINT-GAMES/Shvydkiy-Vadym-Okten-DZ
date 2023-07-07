// import  styles from "./FamilyMember.module.scss" чомусь не вийшло підключити таким чином тому все описав в індекс.ксс
const FamilyMember = (info) => {
    return(
        <div className= 'member'>
            <img src={info.photo}/>
          <h1>{info.name}</h1>
            <h1>{info.surname}</h1>
            <p>Age:{info.age}</p>
            <p>Favourite food: {info.favouriteFood}</p>

        </div>
    )
}
export default FamilyMember;



