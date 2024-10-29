import { Box } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer"

interface Props {
  gameId: number
}

const GameTrailer = ({ gameId }: Props) => {

  const { data, error, isLoading } = useTrailer(gameId)
  // console.log(data);


  if (isLoading) return null;

  if (error) throw new Error;

  const first = data?.results[0]

  return first
    ? (
      <Box
        mt={10}
        width='100%'
        display='flex'
        overflow='hidden'
        borderRadius={10}
        justifyContent='center'>
        <video
          controls
          width='100%'
          src={first.data['480']}
          poster={first.preview} />
      </Box>
    )
    : null
}

export default GameTrailer