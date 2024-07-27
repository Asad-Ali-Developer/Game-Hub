import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/images/logo.webp'

const Navbar = () => {
  return (
    <>
    
        <HStack>
          <Image src={logo} boxSize='60px' padding='5px' borderRadius='15px' />
          <Text>NavBar</Text>
        </HStack>
    
    </>
  )
}

export default Navbar