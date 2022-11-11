import { Animated, FlatList, FlatListProps } from "react-native"

interface SyncedFlatListProps extends FlatListProps<any> {
    id: number
}

const SyncedFlatList = (props: SyncedFlatListProps) => {
    const {id, ...rest} = props

    return(
        <Animated.FlatList 
            {...rest}
        />
    )
}

export default SyncedFlatList