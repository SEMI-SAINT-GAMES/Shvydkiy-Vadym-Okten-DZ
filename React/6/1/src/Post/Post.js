import {useEffect, useState} from "react";
import axios from "axios";
import {Outlet} from "react-router-dom";

export const Post = () =>{
    // console.log("YES")
    // return(
    //     <div className="post">
    //         <h2>ssss</h2>
    //     </div>
    // )
    const [post, setPost] = useState([])
    useEffect(() => {
        const currentUrl = window.location.pathname;
        const parts = currentUrl.split("/");
        const id = parts[parts.length - 1];
        console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((value) => value.data)
            .then((data) => setPost(data))
    }, [post])
    return(
        <>
            <h1>User №{post.userId}</h1>
            <h1>{post.id}</h1>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </>
    )
}