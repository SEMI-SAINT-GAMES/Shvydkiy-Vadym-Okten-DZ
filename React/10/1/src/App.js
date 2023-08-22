import logo from './logo.svg';
import './App.css';
import { Cars } from './Components/Cars/Cars';
import { CarForm } from './Components/CarForm/CarForm';

function App() {
  return (
    <div className="App">
      <CarForm/>
      <hr/>
     <Cars/>
    </div>
  );
}

export default App;
