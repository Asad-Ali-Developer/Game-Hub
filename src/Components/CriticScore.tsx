import { Badge } from "@chakra-ui/react";

interface Props{
    score : number;
}

const criticScore = ( {score} : Props ) => {
  let color = score < 90 ? 'yellow' : score >= 90 ? 'green' : '';
  return (
    <Badge colorScheme={color} fontSize='16px' paddingX={1}>{score}</Badge>
  )
}

export default criticScore
