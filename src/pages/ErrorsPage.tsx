import { Box, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import Navbar from "../Components/Navbar";

const ErrorsPage = () => {

    const error = useRouteError();

    return (
        <>

            <Navbar />
            <Box
                p={5}
                textAlign='center'>
                <Heading mb={3}>Oops</Heading>
                <Text>
                    {isRouteErrorResponse(error)
                        ? 'This page does not exist'
                        : 'An unexpected error has occurred.'
                    }
                </Text>
            </Box>

        </>
    )
}

export default ErrorsPage