import { useEffect, useState } from "react";
import apiClient from "../assets/Services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

// This is the way for generic services
interface FetchResponse<T>{
    count : number;
    results : T[];
}

const useData = <T>(endpoint : string, requestConfig ?: AxiosRequestConfig, deps ?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
    
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, { signal : controller.signal, ...requestConfig })
        .then(res => {
            setData(res.data.results);
            setLoading(false);
        })
        .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        })

        return () => controller.abort(); // Cleanup function to abort the fetch request when component unmounts.
    }, deps ? [ ...deps ] : [])

    return { data, error, isLoading }
};

export default useData;