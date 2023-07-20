
import {useEffect} from "react";
import {Comment} from "./Comment/Comment";
import {apiService} from "../Servises/apiService";

export const Comments = ({setComments, comments}) => {
    useEffect(() => {
        apiService.getComments()
            .then((value) => value.data)
            .then((data) => setComments(data))


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