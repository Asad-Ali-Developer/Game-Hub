import { useState } from "react";
import { HStack, Image, List, ListItem, Switch, Text, useColorMode } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../assets/Services/image-url";
import GenreListContainer from "./GenreListContainer";
import GenreListSkeleton from "./GenreListSkeleton";
import '../App.css'

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre?: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data: genre, isLoading } = useGenre();
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const { toggleColorMode, colorMode } = useColorMode();

    const list = Array.from({ length: 15 }, (_, i) => i + 1);

    return (
        <div>
            <Switch
                visibility='hidden'
                colorScheme="green"
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
            />

            {isLoading && list.map((item) =>
                <GenreListContainer key={item}>
                    <GenreListSkeleton />
                </GenreListContainer>
            )}

            <List marginTop={8}>
                {genre.map((genre, index) => (
                    <ListItem key={genre.id} paddingY={2} onClick={() => onSelectGenre(genre)}>
                        <GenreListContainer>
                            <HStack
                                backgroundColor={
                                    colorMode === 'light'
                                        ? (selectedIndex === index ? '#f3f4f6' : '')
                                        : (selectedIndex === index ? '#1f2937' : '')
                                }
                                onClick={() => {
                                    setSelectedIndex(index);
                                    // console.log('Clicked', genre.name);
                                }}
                                paddingX="5px"
                                paddingY="5px"
                                width="200px"
                                cursor="pointer">

                                <Image
                                    width="36px"
                                    height="36px"
                                    borderRadius={8}
                                    src={getCroppedImageUrl(genre.image_background)}
                                />

                                <Text
                                    backgroundColor={'transparent'}
                                    fontWeight={genre.id === selectedGenre?.id
                                        ? 'bold'
                                        : ''}
                                        
                                >
                                    {genre.name}
                                </Text>

                            </HStack>
                        </GenreListContainer>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default GenreList;