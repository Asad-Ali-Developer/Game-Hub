import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props{
    children: ReactNode
}
const GameCardContainer = ( {children} : Props ) => {
  return (
    <div>
      <Box width={'300px'} borderRadius={10} overflow={'hidden'}>
        {children}
      </Box>
    </div>
  )
}

export default GameCardContainer
