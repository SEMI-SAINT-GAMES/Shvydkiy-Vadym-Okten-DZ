import {useState} from "react";
import PostDetails from "./PostDetails/PostDetails";
import postDetails from "./PostDetails/PostDetails";

const Post = (props) =>{
    const [details, setDetails] = useState(false);

   const {post} = props
    return(
        <div className= "postDiv">
            {

                details&& <PostDetails post = {post}/>
            }
            {
                !details&& <p>Post №{post.id} -  {post.title}</p>

            }




            <button onClick={() => setDetails(!details)}>{!details?'Show Details':'Close Details'}</button>

        </div>
    )
}
export default Post