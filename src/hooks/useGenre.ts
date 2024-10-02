
import { useQuery } from "@tanstack/react-query";
import apiClient from "../assets/Services/api-client";
import { FetchResponse } from "../assets/Services/api-client";
import genres from "../assets/data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const useGenre = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient
        .get<FetchResponse<Genre>>('/genres')
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,  //24 hrs
    initialData : {count : genres.length, results : genres}
});

export default useGenre; 