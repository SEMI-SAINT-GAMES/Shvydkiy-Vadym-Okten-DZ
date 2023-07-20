import logo from './logo.svg';
import './App.css';
import {Users} from "./Users/Users";
import {Form} from "./Form/Form";
import {useState} from "react";

function App() {
    const [onAdd, setOnAdd] = useState(null)
    const [users, setUsers] = useState([])
  return (
    <div className="App">


      <Users onAdd = {onAdd} users = {users} setUsers ={setUsers}/>
        <hr/>
        <Form setOnAdd = {setOnAdd} onAdd = {onAdd} users = {users} setUsers = {setUsers}/>
    </div>
  );
}

export default App;
