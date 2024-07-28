
import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"


const GameGrid = () => {
    const { games, error, isLoading } = useGames()
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div>

            {error && <Text>{error}</Text>}

            {/* {games.length === 0 && 'No Games Found'} */}

            <SimpleGrid
                columns={{ sm: 2, md: 2, lg: 3, xl: 4 }}
                spacing={10}
                padding={5}>
                
                {isLoading && skeleton.map(skeleton => <GameCardSkeleton key={skeleton} />)}
                
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}

            </SimpleGrid>

        </div >
    )
}

export default GameGrid;