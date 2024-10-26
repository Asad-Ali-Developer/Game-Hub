import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";


const PlatformSelector = () => {
    
    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
    const setPlatformId = useGameQueryStore(s => s.setPlatformId)

    const { data, error } = usePlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId)

    if (error) return null;

    return (
        <div>
            <Menu>
                <MenuButton fontSize={{ sm: "md" }} as={Button} rightIcon={<BsChevronDown />}>
                    {selectedPlatform?.name || 'Platforms'}
                </MenuButton>

                <MenuList fontSize={{ sm: "md" }}>
                    {data?.results.map(platform => (
                        <MenuItem
                            onClick={() => setPlatformId(platform.id)}
                            key={platform.id}>
                            {platform.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </div>
    )
}

export default PlatformSelector
