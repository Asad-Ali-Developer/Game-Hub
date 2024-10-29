import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../Services/api-client";
import useGameQueryStore from "../store";
import { Games } from "../entities/Games";

const apiClient = new APIClient<Games>('/games');

const useGames = () => {

    // Now, it is totally relying on gameQuery
    const gameQuery = useGameQueryStore(s => s.gameQuery)

    return useInfiniteQuery<FetchResponse<Games>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient
                .getAll({
                    params: {
                        genres: gameQuery.genreId,
                        parent_platforms: gameQuery.platformId,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                        page: pageParam,
                    },
                }),

        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms('24h'),   //24hre
    })
}

export default useGames;