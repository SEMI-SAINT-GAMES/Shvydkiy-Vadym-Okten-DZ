import {useEffect, useState} from "react";
import axios from "axios";
import {BaseURL, Routs} from "../Links/Links";

export const Todos = () =>{
   const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((value) => value.data)
            .then((data) => setTodos(data))
    }, [])
    return(
        <div className="todos">
            {todos.map((todo, id) => {
                return(
                    <div className="toDo">
                        <p>№{todo.id}</p>
                        <p>User: {todo.userId}</p>
                        <p>To do: {todo.title}</p>
                        <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
                    </div>
                )})}

        </div>
    )
}