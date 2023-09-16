import axios, { AxiosResponse } from "axios";
import { accessToken } from "../Constants/AccessToken";
import { baseURL } from "../Constants/Urls";


type IRes<DATA> = Promise<AxiosResponse<DATA>>

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(req => {
    req.headers.Authorization = `Bearer ${accessToken}`
    return req;
})

export type {
    IRes
}

export{
apiService
}

