import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem area='nav' bg='pink'><Navbar /></GridItem>
        <Show above="lg">
          <GridItem area='aside' bg='coral'>Aside</GridItem>
        </Show>
        <GridItem area='main' bg='cyan'>Main</GridItem>
      </Grid>
    </>
  )
}

export default App