import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Games } from "../hooks/useGames"

interface Props {
    game : Games
}

const GameCard = ({ game }: Props) => {
    return (
        <div>

            <Card borderRadius={10} overflow={"hidden"}>
                <Image src={game.background_image} />
                <CardBody>
                    <Heading fontSize={{sm : 'sm', md : 'md', lg : '1xl', xl : '1xl'}}>{game.name}</Heading>
                </CardBody>
            </Card>

        </div>
    )
}

export default GameCard