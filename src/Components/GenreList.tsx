import useGenre from "../hooks/useGenre"
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import getCroppedImageUrl from "../assets/Services/image-url"

const GenreList = () => {

    const { data } = useGenre()

    return (
        <div>
            {data.map(data => <List><ListItem key={data.id} paddingY={3}>
                <HStack>
                    <Image boxSize='36px' borderRadius={8} src={getCroppedImageUrl(data.image_background)} />
                    <Text fontSize='lg'>{data.name}</Text>
                </HStack>
            </ListItem>
            </List>)}
        </div>
    )
}

export default GenreList
