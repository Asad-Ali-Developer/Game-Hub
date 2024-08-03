
import GameCard from "./GameCard"
import useGames from "../hooks/useGames"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { SimpleGrid, Text } from "@chakra-ui/react"
import { Genre } from "../hooks/useGenre"

interface Props{
    selectedGenre : Genre | null;
}

const GameGrid = ( {selectedGenre} : Props ) => {
    const { data, error, isLoading } = useGames(selectedGenre)
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div>

            {error && <Text>{error}</Text>}


            <SimpleGrid
                columns={{ sm: 2, md: 2, lg: 3, xl: 4 }}
                spacing={10}
                padding={5}>

                {isLoading && skeleton.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton
                             />
                    </GameCardContainer>
                )}

                {data.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}

            </SimpleGrid>

        </div >
    )
}

export default GameGrid;