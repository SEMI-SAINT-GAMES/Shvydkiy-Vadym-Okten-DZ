import axios from "axios";
import {Component} from "react";


class Cars extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cars:[]
        }
    }
    componentDidMount() {
        axios.get(`localhost:8000/cars`).then(({data}) => this.setState({cars:data}))
    }

    render() {
        return(
            <div className="Posts">
                {this.state.cars.map((car) => {
                    return(
                        <div className="Post">
                            {car.id}
                            {car.brand}
                        </div>
                    )
                } )}
            </div>
        )
    }
}
export {Cars}