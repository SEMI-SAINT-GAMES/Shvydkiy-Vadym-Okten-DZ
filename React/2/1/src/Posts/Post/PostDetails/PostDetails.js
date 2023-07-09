const PostDetails = (props) => {
     const {post} = props
    return(
        <>
        <p>Post № {post.id}</p>
            <p>User № {post.userId}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </>
    )
}
export default PostDetails