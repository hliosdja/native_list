import { createContext } from "react";
import { Animated } from "react-native";


export const syncFlatListstate = {
    activeFlatList: new Animated.Value(0),
    offsetPercent: new Animated.Value(0)
}

export const syncFlatListContext = createContext(syncFlatListstate)