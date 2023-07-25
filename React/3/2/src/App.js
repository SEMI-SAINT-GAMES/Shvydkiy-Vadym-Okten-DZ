// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує наданні з https://jsonplaceholder.typicode.com/users
//     Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться state lifting, а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.

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
