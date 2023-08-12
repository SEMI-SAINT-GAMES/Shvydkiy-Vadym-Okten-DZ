import {useEffect} from "react";

import {EpisodeAction } from "../../Redux/Actions/Actions";
import { apiService } from "../../Servises/apiService";
import { useDispatch, useSelector } from "react-redux";
import { Episode } from "./Episode/Episode";
export const Episodes = () =>{
    const dispatch = useDispatch()
    const ep = useSelector((store) => store.episodes.results)
    console.log(ep)
    useEffect(() => {
       apiService.getEp()
           .then((value) => value.data)
           .then((data) => dispatch(EpisodeAction.setEp(data)) )
           
    }, [])
return (
    <div>
        {ep.map((ep, id) =>{
            return(
                <Episode key = {id} ep = {ep}/>
            )})}
    </div>
)
}