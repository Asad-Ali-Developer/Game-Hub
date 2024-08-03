import { Box } from "@chakra-ui/react";
import { ReactNode } from "react"

interface Props {
    children: ReactNode;
}

const GenreListContainer = ({ children }: Props) => {
    return (
        <div>
            <Box borderRadius={8} width='150px' overflow={'hidden'}>
                {children}
            </Box>
        </div>
    )
}

export default GenreListContainer
