import { ChActionTypes } from "../Redusers/CharacterReduser";
import { EpActionTypes } from "../Redusers/EpisodeReduser";
import { LocActionTypes } from "../Redusers/LocationReduser";
export const Actions = {
    setCh: (data) => ({type: ChActionTypes.SET_CH, payload: data })
}
export const EpisodeAction = {
    setEp: (data) =>({type: EpActionTypes.SET_EP, payload: data}) 
}
export const LocationAction = {
    setLoc: (data) => ({type: LocActionTypes.SET_LOC, payload: data})
}