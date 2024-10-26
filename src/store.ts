import { create } from "zustand";

/*
Note:
     1. Undefined: The Absense of a value
     2. Null: The intentional absence of a value
*/


// Refactoring: Extract the Query Object
interface GameQuery {
    genreId?: number,
    platformId?: number;
    sortOrder?: string; // 'asc' or 'desc'
    searchText?: string; // Search query for game name 
}


interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) =>
        set(() => ({
            gameQuery: { searchText }
        })),
    setGenreId: (genreId) =>
        set(store => ({
            gameQuery: { ...store.gameQuery, genreId }
        })),
    setPlatformId: (platformId) =>
        set(store => ({
            gameQuery: { ...store.gameQuery, platformId }
        })),
    setSortOrder: (sortOrder) =>
        set(store => ({
            gameQuery: { ...store.gameQuery, sortOrder }
        })),
}))

export default useGameQueryStore;