export const Post = (props) =>{
    const {post} = props
    return(
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}