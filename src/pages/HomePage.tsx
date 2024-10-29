import { Box, Grid, GridItem, HStack, Show, Switch, Text, useColorMode, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiEnrage } from "react-icons/gi";
import GameGrid from "../Components/GameGrid";
import GameHeading from "../Components/GameHeading";
import GenreList from "../Components/GenreList";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";
import useGameQueryStore from "../store";
import { darkTheme, genreDarkTheme, genreLightTheme } from "../theme";

const HomePage = () => {

  const { } = useGameQueryStore()

  const [showGenreList, setShowGenreList] = useState(false) // State for showing GenreList
  const { toggleColorMode, colorMode } = useColorMode();


  return (

    <Grid
      fontFamily='sans-serif'
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}>

      <Show above="lg">
        <GridItem
          area='aside'
          paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area='main'>

        <Switch
          visibility='hidden'
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
        />

        <Show below="lg">
          <Text
            width={10}
            fontSize={'20px'}
            paddingLeft={2}
            onClick={() => {
              setShowGenreList(!showGenreList)
            }}>
            {showGenreList
              ? <CgClose />
              : <GiEnrage />}
          </Text>

          <VStack
            py={1}
            zIndex={1}
            align='left'
            marginTop={1}
            height={'80%'}
            borderRight={1}
            paddingLeft={1}
            borderRadius={10}
            backdropBlur='10px'
            position='absolute'
            overflowY={'scroll'}
            borderRightColor={darkTheme}
            backgroundColor={
              colorMode === 'light'
                ? genreLightTheme
                : genreDarkTheme
            }>


            {showGenreList && (
              <GenreList />
            )}

          </VStack>
        </Show>

        <Box
          marginY={5}
          paddingLeft={6}>
          <GameHeading />

          <HStack
            gap={5}
            marginTop={8}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid >
  )
}

export default HomePage