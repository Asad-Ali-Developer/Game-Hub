import { useState } from "react";
import { Heading, HStack, Image, List, ListItem, Switch, Text, useColorMode } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../assets/Services/image-url";
import GenreListContainer from "./GenreListContainer";
import GenreListSkeleton from "./GenreListSkeleton";
import '../App.css'
import { darkTheme, lightTheme } from "../theme";

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre?: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data: genre, isLoading } = useGenre();
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const { toggleColorMode, colorMode } = useColorMode();

    const list = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <div>
            <Switch
                visibility='hidden'
                colorScheme="green"
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
            />

            <Heading fontSize='2xl' marginBottom={5}>Genres</Heading>

            {isLoading && list.map((item) =>
                <GenreListContainer key={item}>
                    <GenreListSkeleton />
                </GenreListContainer>
            )}

            <List>
                {genre?.results.map((genre, index) => (
                    <ListItem key={genre.id} paddingY={2} onClick={() => onSelectGenre(genre)}>
                        <GenreListContainer>
                            <HStack
                                backgroundColor={
                                    colorMode === 'light'
                                        ? (selectedIndex === index ? lightTheme : '')
                                        : (selectedIndex === index ? darkTheme : '')
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
                                    objectFit='cover'
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
