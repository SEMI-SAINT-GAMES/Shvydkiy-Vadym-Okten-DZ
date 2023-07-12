import logo from './logo.svg';
import './App.css';
import {Users} from "./Users/Users";
import {Posts} from "./Posts/Posts";
import {useState} from "react";

function App() {
  const [userId, setUserId] = useState(null)
  return (
    <div className="App">
    <Users setUserId = {setUserId}/>
      {
       userId&& <Posts userId = {userId}/>
      }
    </div>
  );
}
export default App;
