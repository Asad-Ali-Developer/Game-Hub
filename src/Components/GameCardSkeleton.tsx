import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameCardSkeleton = () => {
    return (
        <>

            <Card borderRadius={10} width={{sm : '400px', md : '300px', lg : '300px', xl : '300px'}}  overflow={'hidden'}>
                <Skeleton  height={300} />
                <CardBody>
                    <SkeletonText />
                </CardBody>
            </Card>

        </>
    )
}

export default GameCardSkeleton
