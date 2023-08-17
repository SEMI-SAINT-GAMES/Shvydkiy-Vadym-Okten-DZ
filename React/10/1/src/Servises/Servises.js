import axios from "axios";

export const BaseURL = `http://owu.linkpc.net/carsAPI/v1/cars`


export const Services = {
    get: () => axios.get(BaseURL),
    post: (data) => axios.post(BaseURL, data)
}
