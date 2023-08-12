import {useEffect} from "react";

import {EpisodeAction, LocationAction } from "../../Redux/Actions/Actions";
import { apiService } from "../../Servises/apiService";
import { useDispatch, useSelector } from "react-redux";
import { Location } from "./Location/Location";
export const Locations = () =>{
    const dispatch = useDispatch()
    const locs = useSelector((store) => store.locations.results)
    console.log(locs)
    useEffect(() => {
       apiService.getLoc()
           .then((value) => value.data)
           .then((data) => dispatch(LocationAction.setLoc(data)) )
           
    }, [])
return (
    <div>
        {locs.map((loc, id) =>{
            return(
               
                // <Location key = {id} loc = {loc}/>
                <Location key = {id} loc = {loc}/>
                // <Episode key = {id} ep = {ep}/>
            )})}
    </div>
)
}