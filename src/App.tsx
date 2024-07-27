import { Code } from '@chakra-ui/react'
import Stack from '@mui/material/Stack'

const App = () => {
  return (
    <div>
      <Stack direction='row'>
        <Code children='console.log(welcome)' />
        <Code colorScheme='red' children="var chakra = 'awesome!'" />
        <Code colorScheme='yellow' children='npm install chakra' />
      </Stack>
    </div>
  )
}

export default App