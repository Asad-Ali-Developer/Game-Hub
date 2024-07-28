import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../assets/Services/image-url";
import CriticScore from "./CriticScore";




interface Props {
    game: Games;
}

const GameCard = ({ game }: Props) => {
    return (

        <Card borderRadius={10} overflow="hidden">
            {game.background_image && (
                <Image src={getCroppedImageUrl(game.background_image)} />
            )}
            <CardBody>
                <Heading fontSize={{ sm: "md", md: "md", lg: "xl", xl: "xl" }}>
                    {game.name}
                </Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platform={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>

            </CardBody>
        </Card>

    );
};

export default GameCard;
