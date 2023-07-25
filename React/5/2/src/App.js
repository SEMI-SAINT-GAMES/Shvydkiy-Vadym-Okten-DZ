// Реалізувати, використовуючи useForm хук, а також сервіс axios наступне. Всі запити винести в сервісний рівень
// 2.
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
import logo from './logo.svg';
import './App.css';

import {Form} from "./Form/Form";
import {useState} from "react";

import {Comments} from "./Comments/Comments";

function App() {

  const [comments, setComments] = useState([])
  return (
      <div className="App">
          <Comments  comments = {comments} setComments ={setComments}/>
        <hr/>
        <Form  comments = {comments} setComments = {setComments}/>
      </div>
  );
}

export default App;
