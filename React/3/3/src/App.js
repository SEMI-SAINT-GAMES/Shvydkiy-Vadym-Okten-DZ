import logo from './logo.svg';
import './App.css';
import {Child1} from "./Child1/Child1";
import {Child2} from "./Child2/Child2";
import {createContext, useState} from "react";

export const ChildContext = createContext(null)
function App() {
    const ar = [{name: "Vasya", age:41, prof:"Doctor"}, {name: "Igor", age:39, prof:"Prosecutor"}, {name: "Alex", age:18, prof:"Developer"}]
  const [isChild1_1, setIsChild1_1] = useState(ar)

  return (
      <ChildContext.Provider value={{setIsChild1_1, isChild1_1}}>
    <div className="App">
        <h2>Начебто передав інформацію, однак чайлд1.1 треба оновлювати вручну</h2>
    <Child1/>
      <Child2/>
    </div>
      </ChildContext.Provider>
  );
}

export default App;
