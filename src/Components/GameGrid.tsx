import { SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./GameCardSkeleton"


const GameGrid = () => {

    const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames()

    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    if (error) return <Text>{error.message}</Text>

    const fetchGamesCount = data?.pages.reduce(
        (total, page) => total + page.results.length, 0
    ) || 0;

    return (
        <InfiniteScroll
            dataLength={fetchGamesCount}
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner />}>

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
        </InfiniteScroll>

    )
}

export default GameGrid;