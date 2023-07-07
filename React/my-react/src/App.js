import logo from './logo.svg';
import './App.css';
import FamilyMember from "./Components/FamilyMember";

function App() {
  return (
    <div className="App">

        <FamilyMember name ={'Homer'} surname = {'Simpson'} age = {40} favouriteFood = {'Beer'} photo = "http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"/>
        <FamilyMember name ={'Marge'} surname = {'Simpson'} age = {38} favouriteFood = {'Lazania'} photo = "https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png"/>
        <FamilyMember name ={'Bart'} surname = {'Simpson'} age = {10} favouriteFood = {'Chocolate'} photo = "https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"/>
        <FamilyMember name ={'Lisa'} surname = {'Simpson'} age = {9} favouriteFood = {'No Food'} photo = "https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png"/>
        <FamilyMember name ={'Maggie'} surname = {'Simpson'} age = {1} favouriteFood = {'Breast milk'} photo = "https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png"/>
    </div>

  );
}

export default App;
