import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/images/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearcHBar from "./SearcHBar"

interface Props{
  onSearch : (searchText : string) => void;
}

const Navbar = ({ onSearch } : Props) => {
  return (
    <>
    
        <HStack justifyContent='space-between' gap={3} padding='10px' fontFamily='sans-serif'>
          <Image src={logo} boxSize='60px' borderRadius='15px' border='1px' 
          borderColor='gray.700'/>
          <SearcHBar onSearch={onSearch} />
          <ColorModeSwitch />
        </HStack>
    
    </>
  )
}

export default Navbar