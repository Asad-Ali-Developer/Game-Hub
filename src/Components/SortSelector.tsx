import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"


interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ( { onSelectSortOrder, sortOrder } : Props ) => {
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
                    { currentSortOrder?.label || 'Order by: Relevance'}
                </MenuButton>

                <MenuList fontSize={{ sm: "md" }}>
                    {sortOrdders.map((order) => (
                        <MenuItem
                            onClick={() => onSelectSortOrder(order.value)}
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
