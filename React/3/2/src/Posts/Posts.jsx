import {useEffect, useState} from "react";
import {Post} from "./Post/Post";
export const Posts = ({userId}) =>{
const [posts, setPosts] = useState([])
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((posts) => setPosts(posts))
        .catch()
}, [])
    const newPosts = [...posts].filter((post)=> post.userId === userId )
   return(
    <>
        {newPosts.map((post, id) => {
            return <Post key = {id} post ={post}/>
        })}
    </>
)}