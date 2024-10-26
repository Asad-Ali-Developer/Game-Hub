import { Box, HStack } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import SearcHBar from "./SearcHBar"


const Navbar = () => {
  return (
    <>
    
        <HStack justifyContent='space-between' gap={3} padding='10px' fontFamily='sans-serif'>
          
          <Box width={10} height={10} display={'flex'} justifyContent={'center'} alignItems={'center'} fontSize={'xl'} fontWeight={'bold'} border={'1px'} borderRadius={10}
          borderColor={'gray.700'} >A</Box>

          <SearcHBar />
          <ColorModeSwitch />
        </HStack>
    
    </>
  )
}

export default Navbar