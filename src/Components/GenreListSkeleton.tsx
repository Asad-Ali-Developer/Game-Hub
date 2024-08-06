import { HStack, List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react"

const GenreListSkeleton = () => {
    return (
        <div>
            <List height='100%' marginTop={8}>
                <ListItem>
                    <HStack width='100%'>
                        <Skeleton width='44px' borderRadius={8} height='44px' />
                        <SkeletonText width='100px' />
                    </HStack>
                </ListItem>
            </List>
        </div>
    )
}

export default GenreListSkeleton
