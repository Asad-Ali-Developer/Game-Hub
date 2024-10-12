import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenre from "../hooks/useGenre"
import usePlatforms from "../hooks/usePlatform"

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {

  const { data: genres } = useGenre()
  const {data: platforms} = usePlatforms()

  const genre = genres?.results.find(g => g.id === gameQuery.genreId)

  const platform = platforms?.results.find(p => p.id == gameQuery.platformId)


  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <div>
      <Heading as='h1' fontSize='4xl' marginTop='10px'>{heading}</Heading>
    </div>
  )
}

export default GameHeading
