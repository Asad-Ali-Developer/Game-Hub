import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../Components/ExpandableText";
import GameAttributes from "../Components/GameAttributes";
import useGame from "../hooks/useGame";

const GameDetails = () => {

    const { slug } = useParams()
    console.log(slug);

    // useGame(slug!) ... This is trick of TypeScript that the slug will never be null

    const { data: game, error, isLoading } = useGame(slug!)

    if (isLoading) return <Spinner />

    // If game is not there it will show an error or if any error occurred in realtime.
    if (error || !game) throw Error

    return (
        <>

            <Heading>{game.name}</Heading>
            <ExpandableText>
                {game.description_raw}
            </ExpandableText>

            <GameAttributes game={game} />       
        </>
    )
}

export default GameDetails