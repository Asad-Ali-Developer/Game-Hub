import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../Services/image-url";
import CriticScore from "./CriticScore";
import Emojie from "./Emojie";
import { Link } from "react-router-dom";


interface Props {
    game: Games;
}

const GameCard = ({ game }: Props) => {
    return (

        <Card 
        borderRadius={10} 
        overflow="hidden">
            {game.background_image && (
                <Image src={getCroppedImageUrl(game.background_image)} />
            )}
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={1}>
                    <PlatformIconList platform={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>

                <Heading fontSize={{ sm: "md", md: "md", lg: "xl", xl: "xl" }}>
                    <Link to={`/games/${game.slug}`}>
                        {game.name}
                    </Link>
                </Heading>

                <Emojie rating={game.rating_top} />

            </CardBody>
        </Card>

    );
};

export default GameCard;
