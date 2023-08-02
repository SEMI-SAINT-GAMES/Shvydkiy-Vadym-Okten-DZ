import axios from "axios";
import {Component} from "react";


class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comments:[]
        }
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments`).then(({data}) => this.setState({comments:data}))
    }
    render() {
        return(
            <div className="Posts">
                {this.state.comments.map((comment) => {
                    return(
                        <div className="Post">
                            {comment.id}
                            {comment.body}
                        </div>
                    )
                } )}
            </div>
        )
    }
}
export {Comments}