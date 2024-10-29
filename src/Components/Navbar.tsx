import { HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import ColorModeSwitch from "./ColorModeSwitch"
import SearcHBar from "./SearcHBar"


const Navbar = () => {
  return (
    <>

      <HStack justifyContent='space-between' gap={2} px={5} py={3} fontFamily='sans-serif'>

        <Text fontWeight='bold' fontSize={{ base: "lg", lg: "xl", xl: "2xl" }}>
          <Link to='/'>Mosh</Link>
        </Text>

        <SearcHBar />
        <ColorModeSwitch />
      </HStack>

    </>
  )
}

export default Navbar