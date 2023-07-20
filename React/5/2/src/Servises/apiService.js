import axios from "axios";

const BaseURL = 'https://jsonplaceholder.typicode.com/comments'
export const apiService = {
         getComments: () => axios.get(BaseURL),
         postComments: (comment) => axios.post(BaseURL, comment)
}