import {useEffect, useState} from "react";

import Mission from "./Mission/Mission";
import mission from "./Mission/Mission";


const Missions = (props) => {
    const [missions, setMissions] = useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
        .then((res) => res.json())
        .then((missions) => setMissions(missions))
            .catch()

    }, [])
    const newMissions = [...missions].filter((mission) => mission.launch_year < 2020)

    return (
        <>

            {

                newMissions.map((mission, id) => {

                return <Mission key = {id} mission = {mission}/>

            })}

        </>
    )
}
export default Missions