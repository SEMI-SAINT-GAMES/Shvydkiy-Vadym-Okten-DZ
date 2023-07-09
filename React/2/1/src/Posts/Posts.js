import {useEffect, useState} from "react";
import Post from "./Post/Post.js"
import PostDetails from "./Post/PostDetails/PostDetails";





const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => setPosts(posts))
            .catch()
    }, [])


    return(
        <>
            <h1>POSTS</h1>
            {posts.map((post, id) => {

                return <Post key = {id} post ={post}/>
            })}
        </>
    )
}
export default Posts