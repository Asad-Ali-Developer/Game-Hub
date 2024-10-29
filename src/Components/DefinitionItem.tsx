import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    terms: string;
    children: ReactNode | ReactNode[]
}

const DefinitionItem = ({ terms, children }: Props) => {
    return (
        <Box my={5}>
            <Heading
                as='dt'
                fontSize='md'
                color='gray.500'>{terms}</Heading>
            <dd>{children}</dd>
        </Box>
    )
}

export default DefinitionItem