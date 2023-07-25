// property drill
//
// Структура:
//     Головна компонента App. App робить запит на https://jsonplaceholder.typicode.com/users
//     В середині Апп лежить компонента Users яка відображає всіх отриманих в апп юзерів з плейсхолдеру
// Кожен юзер - це компонента User, в якій є інші комоненти, а саме
// UserDetails - яка відображає інформацію id,name,username,email,phone,website,
// UserAddress - яка відображає інформацію street suite city,
// Company - яка відображає name,catchPhrase,bs
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
