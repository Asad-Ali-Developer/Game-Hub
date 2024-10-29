import useTrailer from "../hooks/useTrailer"

interface Props {
  gameId: number
}

const GameTrailer = ({ gameId }: Props) => {

  const { data, error, isLoading } = useTrailer(gameId)
  console.log(data);


  if (isLoading) return null;

  if (error) throw new Error;

  const first = data?.results[0]

  return first
    ? (
      <video
        controls
        src={first.data[480]}
        poster={first.preview} />
    )
    : null
}

export default GameTrailer