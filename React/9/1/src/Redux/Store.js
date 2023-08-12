import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { CharactersReduser } from "./Redusers/CharacterReduser";
import { EpisodeReduser } from "./Redusers/EpisodeReduser";
import { LocationReduser } from "./Redusers/LocationReduser";

const rootReduser = combineReducers({
    characters: CharactersReduser ,
    episodes: EpisodeReduser,
    locations: LocationReduser
})
const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})
const Store = createStore(rootReduser, composeEnhancers())
export default Store