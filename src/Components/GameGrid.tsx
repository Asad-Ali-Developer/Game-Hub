
import GameCard from "./GameCard"
import useGames from "../hooks/useGames"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { SimpleGrid, Text } from "@chakra-ui/react"


const GameGrid = () => {
    const { data, error, isLoading } = useGames()
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div>

            {error && <Text>{error}</Text>}


            <SimpleGrid
                columns={{ sm: 2, md: 2, lg: 3, xl: 4 }}
                spacing={10}
                padding={5}>

                {isLoading && skeleton.map(skeleton =>
                    <GameCardContainer>
                        <GameCardSkeleton
                            key={skeleton} />
                    </GameCardContainer>
                )}

                {data.map(game => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                ))}

            </SimpleGrid>

        </div >
    )
}

export default GameGrid;