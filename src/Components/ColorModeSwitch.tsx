import { HStack, Switch, useColorMode } from "@chakra-ui/react"


const ColorModeSwitch = () => {

    const { toggleColorMode, colorMode } = useColorMode()


    return (
        <>
            <HStack>

                <Switch
                    size='sm'
                    colorScheme="gray"
                    isChecked={colorMode === 'dark'}
                    onChange={toggleColorMode} />
            </HStack>

        </>
    )
}

export default ColorModeSwitch;