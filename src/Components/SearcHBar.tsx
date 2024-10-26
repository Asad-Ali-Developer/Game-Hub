import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"
import useGameQueryStore from "../store"

const SearcHBar = () => {
    
    // Now, it is totally dependent on this setSearchText function
    const setSearchText = useGameQueryStore(s => s.setSearchText)
    
    const ref = useRef<HTMLInputElement>(null)
    return (

        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) return setSearchText(ref.current.value);

        }}>
            <div>
                <InputGroup borderRadius={10}>
                    <InputLeftElement children={<BsSearch />} />
                    <Input ref={ref} placeholder="Search game ..." variant='filled' />
                </InputGroup>
            </div>
        </form>
    )
}

export default SearcHBar
