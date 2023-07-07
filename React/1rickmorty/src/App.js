
import './App.css';

import FilmCharacter from "./Char/Character";

let characters = [
    {name:"Concerto",
        status:"Dead",
        species:"Humanoid",
        gender:"Male",
        location:"unknown",
        image: "https://rickandmortyapi.com/api/character/avatar/70.jpeg"},
    {
        name:"Cowboy Morty",
        status :"Alive",
        species:"Human",
        gender :"Male",
        location:"Citadel of Ricks",
        image:"https://rickandmortyapi.com/api/character/avatar/77.jpeg"},
    {
        name:"General Nathan",
        status:"Dead",
        species:"Human",
        gender:"Male",
        location: "Earth (Replacement Dimension)",
        image:"https://rickandmortyapi.com/api/character/avatar/138.jpeg"},
    {
        name:"Tiny Rick",
        status:"Dead",
        species:"Human",
        gender:"Male",
        location: "Earth (Replacement Dimension)" ,
        image:"https://rickandmortyapi.com/api/character/avatar/353.jpeg"
    },
    {
        name:"Modern Rick",
        status:"Alive",
        species:"Human",
        gender:"Male",
        location:"Citadel of Ricks",
        image:"https://rickandmortyapi.com/api/character/avatar/485.jpeg"
    },
    {
        name:"Long Hair Rick",
        status:"unknown",
        species:"Human",
        gender:"Male",
        location:"Citadel of Ricks",
        image:"https://rickandmortyapi.com/api/character/avatar/818.jpeg"
    }

]

function App() {

  return (
    <div className="App">
        <FilmCharacter name ={characters[0].name} photo = {characters[0].image} status = {characters[0].status} species = {characters[0].species}
                       gender = {characters[0].gender} location = {characters[0].location}/>
        <FilmCharacter name ={characters[1].name} photo = {characters[1].image} status = {characters[1].status} species = {characters[1].species}
                       gender = {characters[1].gender} location = {characters[1].location}/>
        <FilmCharacter name ={characters[2].name} photo = {characters[2].image} status = {characters[2].status} species = {characters[2].species}
                       gender = {characters[2].gender} location = {characters[2].location}/>
        <FilmCharacter name ={characters[3].name} photo = {characters[3].image} status = {characters[3].status} species = {characters[3].species}
                       gender = {characters[3].gender} location = {characters[3].location}/>
        <FilmCharacter name ={characters[4].name} photo = {characters[4].image} status = {characters[4].status} species = {characters[4].species}
                       gender = {characters[4].gender} location = {characters[4].location}/>
        <FilmCharacter name ={characters[5].name} photo = {characters[5].image} status = {characters[5].status} species = {characters[5].species}
                       gender = {characters[5].gender} location = {characters[5].location}/>

    </div>

  );
}

export default App;
