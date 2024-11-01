import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from "@chakra-ui/react"
import Platform from "../entities/Platform";
import { IconType } from 'react-icons';

interface Props {
    platform: Platform[]
}

const PlatformIconList = ({ platform }: Props) => {

    // This is called the Index Signature of like pc, playstation etc by Anotation
    const iconsMap : { [key : string] : IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

    return (
        <HStack marginY={3}>
            {platform.map((platform) => (
                <Icon key={platform.id} as={iconsMap[platform.slug]} color='gray.500'></Icon>
            ))}
        </HStack>
    )
}

export default PlatformIconList