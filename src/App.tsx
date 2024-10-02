import { Box, Grid, GridItem, HStack, Show, Switch, Text, VStack, useColorMode } from "@chakra-ui/react"
import { useState } from "react"
import { CgClose } from "react-icons/cg"
import { GiEnrage } from "react-icons/gi"
import GameGrid from "./Components/GameGrid"
import GameHeading from "./Components/GameHeading"
import GenreList from "./Components/GenreList"
import Navbar from "./Components/Navbar"
import PlatformSelector from "./Components/PlatformSelector"
import SortSelector from "./Components/SortSelector"
import { Platform } from "./hooks/usePlatform"
import { darkTheme, genreDarkTheme, genreLightTheme } from "./theme"


/*
Note:
     1. Undefined: The Absense of a value
     2. Null: The intentional absence of a value
*/


// Refactoring: Extract the Query Object
export interface GameQuery {
  genreId?: number,
  platform: Platform | null;
  sortOrder: string; // 'asc' or 'desc'
  searchText: string; // Search query for game name 
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  const [showGenreList, setShowGenreList] = useState(false) // State for showing GenreList
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Grid fontFamily='sans-serif' templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}>

        <GridItem area='nav'>
          <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
        </GridItem>



        <Show above="lg">

          <GridItem area='aside' paddingX={5}>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId : genre.id })} />
          </GridItem>
        </Show> 

        <GridItem area='main'>

          <Switch
            visibility='hidden'
            isChecked={colorMode === 'dark'}
            onChange={toggleColorMode}
          />

          <Show below="lg">
            <Text width={10} fontSize={'20px'} paddingLeft={2}
              onClick={() => {
                setShowGenreList(!showGenreList)
              }}>
              {showGenreList ? <CgClose /> : <GiEnrage />}
            </Text>

            <VStack
              align='left'
              position='absolute'
              py={1}
              paddingLeft={1}
              borderRight={1}
              borderRightColor={darkTheme}
              zIndex={1}
              marginTop={1}
              height={'80%'}
              overflowY={'scroll'}
              backdropBlur='10px'
              borderRadius={10}
              backgroundColor={
                colorMode === 'light'
                  ? genreLightTheme
                  : genreDarkTheme
              }>


              {showGenreList && (
                <GenreList
                  selectedGenreId={gameQuery.genreId}
                  onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })} />
              )}
            </VStack>
          </Show>

          <Box marginY={5} paddingLeft={6}>
            <GameHeading gameQuery={gameQuery} />

            <HStack gap={5} marginTop={8}>
              <PlatformSelector
                onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
                selectedPlatform={gameQuery.platform} />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
            </HStack>
          </Box>

          <GameGrid
            gameQuery={gameQuery} />
        </GridItem>
      </Grid >
    </>
  )
}

export default App
