import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import genres from "../data/genres";

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

    staleTime: 24 * 60 * 60 * 1000,  //24 hrs

    initialData: {
        count: genres.length,
        next: null,
        previous: null,
        results: genres,
    }
    
});

export default useGenre; 