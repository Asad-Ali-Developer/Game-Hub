import { useEffect, useState } from "react"
import apiClient from "../assets/Services/api-client"
import { CanceledError } from "axios"

export interface Games{
    id : number,
    name : string,
    background_image : string
}

interface FetchGamesResponse{
    count : number,
    results : Games[]
}

const useGames = () => {
    const [games, setGames] = useState<Games[]>([])
    const [error, setError] = useState('')

    useEffect(() => {

        const controller = new AbortController();

        apiClient.get<FetchGamesResponse>('/games', { signal : controller.signal })
        .then(res => setGames(res.data.results))
        .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message)
        })

        return () => controller.abort(); // Cleanup function to abort the fetch request when component unmounts.
    }, [])

    return { games, error }
}

export default useGames;