// http://owu.linkpc.net/carsAPI/v1/doc
//     Реалізувати створення, видалення та оновлення машин
import logo from './logo.svg';
import './App.css';
import {Cars} from "./Cars/Cars";
import {Form} from "./Form/Form";
import {FormUpdate} from "./FormUpdate/FormUpdate";
function App() {
  return (
    <div className="App">
        <h2>Add Form</h2>
      <Form/>
      <hr/>
        <h2>Update Form</h2>
      <FormUpdate/>
      <hr/>
    <Cars/>


    </div>
  );
}
export default App;
