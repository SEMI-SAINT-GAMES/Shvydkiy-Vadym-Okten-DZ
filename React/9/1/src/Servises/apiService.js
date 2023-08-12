import axios from "axios";

const BaseURL = 'https://rickandmortyapi.com/api/'

const Links = {
    characters: `character`,
    episodes: `episode`,
    locations: `location`
}
export const apiService = {
         getCh: () => axios.get(BaseURL + Links.characters),
         getEp: () => axios.get(BaseURL + Links.episodes),
         getLoc: () => axios.get(BaseURL + Links.locations)
}