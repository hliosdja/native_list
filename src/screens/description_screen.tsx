import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, FlatList, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import SyncedFlatList from '../components/synced_flatlist'

import { syncFlatListContext, syncFlatListstate } from '../context/syncFlatListContext'

const DescriptionScreen = ({ navigation, route }, props: any) => {
    const { text, list, index } = route.params

    const { indexToScroll, masterList } = useSelector((state: any) => state.num)
    const dispatch = useDispatch()
    const [listIndex, setListIndex] = useState(0)

    const w = Dimensions.get('window').width
    const h = Dimensions.get('window').height

    const getItemLayout = (data: any, index) => {
        return {length: w, offset: w * index, index}
    }

    return(
        <syncFlatListContext.Provider value={syncFlatListstate}>
            <View style={styles.tab}>
                <SyncedFlatList
                    id={0}
                    data={list}
                    horizontal={true}
                    initialScrollIndex={index + 1}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => 
                        <Text style={styles.tabItem}>{item}</Text>
                    }
                />
            </View>
            <View style={styles.container}>
                {/* <Text style={styles.textDecoration}>{text}</Text>
                <TouchableHighlight
                    style={styles.buttonDecoration}
                    underlayColor='#f1f2'
                    onPress={()=>navigation.goBack()}
                >
                    <Text>Go back</Text>
                </TouchableHighlight> */}
                <SyncedFlatList
                    id={1}
                    data={list}
                    showsVerticalScrollIndicator={false}
                    initialScrollIndex={index + 1}
                    renderItem={({item}) => <Text style={styles.rowItem}>{item}</Text>}
                />
            </View>
        </syncFlatListContext.Provider>
    )
}

export default DescriptionScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDecoration: {
        fontSize: 30,
    },
    buttonDecoration: {
        marginTop: 20,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
    },
    tab: {
        padding: 10,
        marginBottom: 12
    },
    tabItem: {
        borderColor: "#21130d",
        borderWidth: 1,
        borderRadius: 18,
        width: 50,
        textAlign: 'center',
        marginHorizontal: 5,
        fontSize: 16
    },
     rowItem: {
        fontSize: 30,
        padding: 20,
        textAlign: 'center'
     }
})