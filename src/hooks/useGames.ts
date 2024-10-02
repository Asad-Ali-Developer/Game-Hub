import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../assets/Services/api-client";
import apiClient from "../assets/Services/api-client";


export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}


const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Games>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient
        .get<FetchResponse<Games>>('/games', {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        })
        .then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hrs
    // initialData : {count : games.length, results : games}
})




// useData<Games>('/games', {
//     // Params for the API request
//     params: {
//         genres: gameQuery.genre?.id,
//         platforms : gameQuery.platform?.id,
//         ordering : gameQuery.sortOrder,
//         search : gameQuery.searchText
//     }
// },
//     // Array of dependencies 
//     [gameQuery])

export default useGames;