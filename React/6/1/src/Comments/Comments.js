import {useEffect, useState} from "react";
import axios from "axios";
import {Outlet, useNavigate} from "react-router-dom";

export const Comments = () => {

    const [comments, setComments] = useState([])
    const nav = useNavigate()
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((value) => value.data)
            .then((data) => setComments(data))
    }, [])
    return(
        <div className="comments">
            {comments.map((comment, id) => {

                return(
                    <div className="comment">
                        <p>Comment on post №{comment.postId}</p>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                        <p>{comment.email}</p>
                        <button className='button' onClick={() => nav(`posts/${comment.postId}`)}>See Post</button>

                    </div>
                )})}
            <Outlet/>
        </div>

    )
}