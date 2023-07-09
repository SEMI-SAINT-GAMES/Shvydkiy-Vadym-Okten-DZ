import {useState} from "react";

const Mission = (props) => {
    const {mission} = props

    return(

        <div className="mission">

            <p>Mission - <b>{mission.mission_name}</b></p>
            <p>Launch year - <b>{mission.launch_year}</b></p>

            <img src= {mission.links.mission_patch_small}/>
        </div>
    )
}
export default Mission