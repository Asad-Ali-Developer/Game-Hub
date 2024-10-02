
import GameCard from "./GameCard"
import useGames from "../hooks/useGames"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { GameQuery } from "../App"
import React from "react"

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {

    const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = useGames(gameQuery)

    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    if (error) return <Text>{error.message}</Text>

    return (
        <>
            <SimpleGrid
                padding={5}
                spacing={10}
                fontFamily='sans-serif'
                columns={{ sm: 2, md: 2, lg: 3, xl: 4 }}>

                {isLoading && skeleton.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton
                        />
                    </GameCardContainer>
                )}

                {data?.pages.map((page, index) => (
                    <React.Fragment key={index} >
                        {page.results.map(game => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                ))}

            </SimpleGrid>

            <Button
                ml={5}
                mb={10}
                type="button"
                cursor='pointer'
                colorScheme="green"
                disabled={isFetchingNextPage}
                onClick={() => fetchNextPage()}>
                {isFetchingNextPage
                    ? <><Spinner size='sm' /><Text ml={2}>Loading...</Text></>
                    : 'Load More'}
            </Button>

        </>
    )
}

export default GameGrid;