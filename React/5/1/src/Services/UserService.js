import axios from "axios";
const BaseURL = 'https://jsonplaceholder.typicode.com/users'
export const UserService = {
    GetUsers: () => axios.get(BaseURL),
    PostUser: (user) => axios.post(BaseURL, user)
}