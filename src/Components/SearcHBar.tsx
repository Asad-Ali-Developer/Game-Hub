import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"


const SearcHBar = () => {
    return (
        <div>
            <InputGroup>
                <InputLeftElement children={<BsSearch />}/>
                <Input borderRadius={10} placeholder="Search game ..." variant='filled' />
            </InputGroup>
        </div>
    )
}

export default SearcHBar
