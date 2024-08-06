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


const useGames = (selectedGenre: Genre | null, selectedPlatform : Platform | null) =>
    useData<Games>('/games', {
        // Params for the API request
        params: {
            genres: selectedGenre?.id,
            platforms : selectedPlatform?.id
        }
    },
        // Array of dependencies
        [selectedGenre?.id, selectedPlatform?.id])

export default useGames;