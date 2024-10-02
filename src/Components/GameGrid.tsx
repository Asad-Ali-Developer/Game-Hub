
import GameCard from "./GameCard"
import useGames from "../hooks/useGames"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { SimpleGrid, Text } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props {
    gameQuery : GameQuery 
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery)
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

        if(error) return <Text>{error.message}</Text>
    
    return (
    
            <SimpleGrid
                columns={{ sm: 2, md: 2, lg: 3, xl: 4 }}
                spacing={10}
                padding={5}
                fontFamily='sans-serif'>

                {isLoading && skeleton.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton
                        />
                    </GameCardContainer>
                )}

                {data?.results.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}

            </SimpleGrid>

    )
}

export default GameGrid;