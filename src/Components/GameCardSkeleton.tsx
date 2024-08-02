import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameCardSkeleton = () => {
    return (
        <>

            <Card height='100%'>
                <Skeleton  height={240} />
                <CardBody>
                    <SkeletonText />
                </CardBody>
            </Card>

        </>
    )
}

export default GameCardSkeleton
