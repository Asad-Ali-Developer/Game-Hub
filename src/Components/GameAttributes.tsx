import { SimpleGrid, Text } from "@chakra-ui/react"
import Games from "../entities/Games"
import CriticScore from "./CriticScore"
import DefinitionItem from "./DefinitionItem"

interface Props {
    game: Games
}

const GameAttributes = ({ game }: Props) => {
    return (
        <>
            <SimpleGrid columns={2} as='dl'>

                <DefinitionItem terms="Platforms">
                    {game.parent_platforms?.map(({ platform }) =>
                        <Text key={platform.id}>{platform.name}</Text>
                    )}
                </DefinitionItem>

                <DefinitionItem terms="Metacritic">
                    <CriticScore score={game.metacritic} />
                </DefinitionItem>

                <DefinitionItem terms="Genres">
                    {game.genres.map(genre => (
                        <Text key={genre.id}>{genre.name}</Text>
                    ))}
                </DefinitionItem>

                <DefinitionItem terms="Publishers">
                    {game.publishers?.map(publisher => (
                        <Text key={publisher.id}>{publisher.name}</Text>
                    ))}
                </DefinitionItem>

            </SimpleGrid>
        </>
    )
}

export default GameAttributes