import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatform";

interface Props {
    onSelectPlatform: (plateform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();

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
                            onClick={() => onSelectPlatform(platform)}
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
