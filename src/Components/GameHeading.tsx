import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props{
    gameQuery : GameQuery
}

const GameHeading = ({ gameQuery } : Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <div>
      <Heading as='h1' fontSize='4xl' marginTop='10px'>{heading}</Heading>
    </div>
  )
}

export default GameHeading
