import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"
import useGameQueryStore from "../store"
import { useNavigate } from "react-router-dom"

const SearcHBar = () => {

    // Now, it is totally dependent on this setSearchText function
    const setSearchText = useGameQueryStore(s => s.setSearchText)

    const navigate = useNavigate()

    const ref = useRef<HTMLInputElement>(null)
    return (

        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) {
                setSearchText(ref.current.value);
                navigate('/')
            }
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
