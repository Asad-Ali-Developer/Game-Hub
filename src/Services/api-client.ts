import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];

}


const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3c88b21b8cde453aa4889c9f23128a8c'
    }
})

class APIClient<T> {
    endpont: string;

    constructor(endpoint: string) {
        this.endpont = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpont, config)
            .then(res => {
                console.log(res.data);
                return res.data;
            })
    }
}

export default APIClient;