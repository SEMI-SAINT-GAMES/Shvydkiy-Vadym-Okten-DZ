import logo from './logo.svg';
import './App.css';
import Users from "./Users/Users";

import {createContext, useEffect, useState} from "react";
export const UserContext = createContext(null)
function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => setUsers(users))
            .catch()
    }, [])

  return (
      <UserContext.Provider value={{users}}>
    <div className="App">
        <div className="UsersContainer">
      <Users/>
        </div>

    </div>
       </UserContext.Provider>
  );
}

export default App;
