import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots"

interface Props {
    gameId: number
}

const GameScreenShots = ({ gameId }: Props) => {

    const { data, error, isLoading } = useScreenShots(gameId)

    console.log(data);


    if (isLoading) return null;

    if (error) throw new Error;

    const first = data?.results

    return (
        <>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mt={5}>

                {first?.map(screenshot => (
                    screenshot.image ?
                        <Image
                            borderRadius={10}
                            key={screenshot.id}
                            src={screenshot.image} />
                        : <Spinner />
                ))}

            </SimpleGrid>

        </>
    )
}

export default GameScreenShots