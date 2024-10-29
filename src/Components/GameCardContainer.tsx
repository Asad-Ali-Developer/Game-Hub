import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <div>
      <Box
        borderRadius={10}
        overflow={'hidden'}
        _hover={{
          transform: 'scale(1.03)',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        }}>
        {children}
      </Box>
    </div>
  )
}

export default GameCardContainer
