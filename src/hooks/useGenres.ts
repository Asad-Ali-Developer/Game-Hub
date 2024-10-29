import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import genres from "../data/genres";
import ms from "ms"
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');

console.log(apiClient);

const useGenre = () => useQuery({

    queryKey: ['genres'],

    queryFn: apiClient.getAll,

    staleTime: ms('24h'),  //24 hrs

    initialData: genres
    
});

export default useGenre; 