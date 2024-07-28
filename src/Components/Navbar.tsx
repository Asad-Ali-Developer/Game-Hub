import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/images/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"

const Navbar = () => {
  return (
    <>
    
        <HStack justifyContent='space-between' padding='10px'>
          <Image src={logo} boxSize='60px' borderRadius='15px' border='1px' borderColor='white'/>
          <ColorModeSwitch />
        </HStack>
    
    </>
  )
}

export default Navbar