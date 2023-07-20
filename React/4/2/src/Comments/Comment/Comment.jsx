export const Comment = ({comment}) =>{

    return(
        <div>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
            <p>{comment.email}</p>
            <hr/>
        </div>
    )
}