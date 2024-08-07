import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import Navbar from "./Components/Navbar"
import GameGrid from "./Components/GameGrid"
import GenreList from "./Components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import PlatformSelector from "./Components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import SortSelector from "./Components/SortSelector"
import GameHeading from "./Components/GameHeading"



// Refactoring: Extract the Query Object
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string; // 'asc' or 'desc'
  searchText: string; // Search query for game name 
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
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
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
          </GridItem>

        </Show>


        <GridItem area='main'>
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
      </Grid>
    </>
  )
}

export default App