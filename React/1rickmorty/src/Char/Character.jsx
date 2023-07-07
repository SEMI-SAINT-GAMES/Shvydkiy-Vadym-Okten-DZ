const FilmCharacter = (info) => {
    return(
        <div className= "main">
            <img src= {info.photo}/>
            <div className="info">
          <h3>Name: {info.name}</h3>
            <p>Gender: {info.gender}</p>
            <p>Species: {info.species}</p>
            <p>Status: {info.status}</p>
            <p>Location: {info.location}</p>
            </div>
        </div>
    )
}
export default FilmCharacter;