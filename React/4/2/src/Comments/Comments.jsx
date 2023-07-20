
import {useEffect} from "react";
import {Comment} from "./Comment/Comment";

export const Comments = ({setComments, comments}) => {



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((comments) => setComments(comments))
            .catch()

    }, [])
    return (
        <div>
            {comments.map((comment, id) =>{
                return(
                    <Comment key = {id} comment = {comment}/>
                )
            } )}
        </div>
    )
}