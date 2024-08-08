import { Image, ImageProps } from "@chakra-ui/react";

import Meh from '../assets/images/meh.png'
import BullEys from '../assets/images/bull-eye.png'
import thumbsUp from '../assets/images/thumbs-up1.webp'



interface Props{
    rating : number
}

const Emojie = ({ rating } : Props) => {
    if(rating < 3) return null;

    const emojieMap : { [key : number] : ImageProps } = {
        3 : { src : Meh, alt : 'meh', boxSize : '25px' },
        4 : { src : BullEys, alt : 'recommended', boxSize :'25px'},
        5 : { src : thumbsUp, alt : 'exceptional', boxSize :'35px' },
    }
  return (
    <div>
        <Image { ...emojieMap[rating] } marginTop={2} />
    </div>
  )
}

export default Emojie
