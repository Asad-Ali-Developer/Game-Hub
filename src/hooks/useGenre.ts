import { useQuery } from "@tanstack/react-query";
// import genres from "../assets/data/genres";
import APIClient from "../Services/api-client";

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
    // initialData : {count : genres.length, results : genres}
});

export default useGenre; 