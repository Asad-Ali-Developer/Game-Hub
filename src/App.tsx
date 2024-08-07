import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./Components/Navbar"
import GameGrid from "./Components/GameGrid"
import GenreList from "./Components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import PlatformSelector from "./Components/PlatformSelector"
import { Platform } from "./hooks/useGames"


// Refactoring: Extract the Query Object
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
          <Navbar />
        </GridItem>

        <Show above="lg">
          <GridItem area='aside' paddingX={5}>

            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
          </GridItem>

        </Show>


        <GridItem area='main'>
          <PlatformSelector
            onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            selectedPlatform={gameQuery.platform} />

          <GameGrid
            gameQuery={gameQuery} />

        </GridItem>
      </Grid>
    </>
  )
}

export default App