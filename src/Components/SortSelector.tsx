import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import useGameQueryStore from "../store"


const SortSelector = () => {


    const setSortOrder = useGameQueryStore(s => s.setSortOrder)
    const sortOrder =useGameQueryStore(s => s.gameQuery.sortOrder)

    const sortOrdders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Data Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ]

    const currentSortOrder = sortOrdders.find(order => order.value === sortOrder)

    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    {currentSortOrder?.label || 'Order by: Relevance'}
                </MenuButton>

                <MenuList fontSize={{ sm: "md" }}>
                    {sortOrdders.map((order) => (
                        <MenuItem
                            onClick={() => setSortOrder(order.value)}
                            key={order.value}
                            value={order.value}>
                            {order.label}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </div>
    )
}

export default SortSelector
