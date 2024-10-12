import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import genres from "../data/genres";
import ms from "ms"

const apiClient = new APIClient<Genre>('/genres');

console.log(apiClient);

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenre = () => useQuery({

    queryKey: ['genres'],

    queryFn: apiClient.getAll,

    staleTime: ms('24h'),  //24 hrs

    initialData: genres
    
});

export default useGenre; 