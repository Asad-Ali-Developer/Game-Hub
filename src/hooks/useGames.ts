import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";

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
}


const useGames = (gameQuery : GameQuery) =>
    useData<Games>('/games', {
        // Params for the API request
        params: {
            genres: gameQuery.genre?.id,
            platforms : gameQuery.platform?.id
        }
    },
        // Array of dependencies
        [gameQuery.genre?.id, gameQuery.platform?.id])

export default useGames;