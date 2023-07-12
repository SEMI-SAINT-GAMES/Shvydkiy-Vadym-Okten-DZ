import {useEffect, useState} from "react";

const Posts = () => {
    const [posts, allPosts]  = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((value) => value.json())
            .then(value => allPosts(value))
    })




    return(
        <div>
            {posts.map(post => <Post key = {post.id} post = {post}/>)}
        </div>
    )
}
export default Posts;