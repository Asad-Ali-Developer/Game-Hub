import { Box, Grid, GridItem, HStack, Show, Switch, useColorMode } from "@chakra-ui/react";
import GameGrid from "../Components/GameGrid";
import GameHeading from "../Components/GameHeading";
import GenreList from "../Components/GenreList";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";

const HomePage = () => {

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


        <Box
          marginY={5}>
          <GameHeading />

          <HStack
            gap={3}
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