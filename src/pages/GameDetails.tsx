import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../Components/ExpandableText";
import GameAttributes from "../Components/GameAttributes";
import GameScreenShots from "../Components/GameScreenShots";
import GameTrailer from "../Components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetails = () => {

    const { slug } = useParams()
    // console.log(slug);

    // useGame(slug!) ... This is trick of TypeScript that the slug will never be null

    const { data: game, error, isLoading } = useGame(slug!)

    if (isLoading) return <Spinner 
    position='absolute' 
    marginTop='50%' 
    left='50%'/>

    // If game is not there it will show an error or if any error occurred in realtime.
    if (error || !game) throw Error

    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} p={5}>

                <GridItem>

                    <Heading>{game.name}</Heading>

                    <ExpandableText>
                        {game.description_raw}
                    </ExpandableText>

                    <GameAttributes game={game} />

                </GridItem>

                <GridItem>

                    <GameTrailer gameId={game.id} />

                    <GameScreenShots gameId={game.id} />

                </GridItem>


            </SimpleGrid>

        </>
    )
}

export default GameDetails