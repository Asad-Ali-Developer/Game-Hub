import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props{
    onSearch : (searchText : string) => void;
}

const SearcHBar = ( { onSearch } : Props ) => {
    const ref = useRef<HTMLInputElement>(null)
    return (
        
        <form onSubmit={(event) => {
            event.preventDefault();
            if(ref.current) return onSearch(ref.current.value);
            
        }}>
            <div>
                <InputGroup borderRadius={10}>
                    <InputLeftElement children={<BsSearch />}/>
                    <Input ref={ref} placeholder="Search game ..." variant='filled' />
                </InputGroup>
            </div>
        </form>
    )
}

export default SearcHBar
