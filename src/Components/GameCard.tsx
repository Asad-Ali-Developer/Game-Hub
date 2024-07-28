import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
    game: Games;
}

const GameCard = ({ game }: Props) => {
    return (

            <Card borderRadius={10} overflow="hidden">
                {game.background_image && (
                    <Image src={game.background_image} alt={`${game.name} cover`} />
                )}
                <CardBody>
                    <Heading fontSize={{ sm: "sm", md: "md", lg: "xl", xl: "xl" }}>
                        {game.name}
                    </Heading>
                    <PlatformIconList platform={game.parent_platforms.map(p => p.platform)}/>
                </CardBody>
            </Card>

    );
};

export default GameCard;
