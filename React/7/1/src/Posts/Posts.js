import axios from "axios";
import {Component} from "react";


class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(({data}) => this.setState({posts:data}))
    }
    render() {
        return(
            <div className="Posts">
                {this.state.posts.map((post) => {
                    return(
                        <div className="Post">
                            {post.id}
                            {post.title}
                        </div>
                    )
                } )}
            </div>
        )
    }
}
export {Posts}