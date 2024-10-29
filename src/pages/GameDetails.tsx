import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
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
            <Text
                mt={5}
                textAlign='justify'
                textIndent={'30px'}>
                {game.description_raw}
            </Text>

        </>
    )
}

export default GameDetails