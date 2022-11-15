import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, FlatList, Dimensions, Image, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const DescriptionScreen = ({ navigation, route }) => {
    const { text, image } = route.params
    const [facts, setFacts] = useState([])
    const [isFactsLoading, setIsFactsLoading] = useState(true)

    useEffect(() => {
        console.log('name: ', text)
        const url = `https://anime-facts-rest-api.herokuapp.com/api/v1/${text}`
        fetch(url)
        .then((response) => response.json())
        .then((result) => {
            setFacts(result.data)
        })
        .catch((e) => {console.log('err: ', e)})
        .finally(() => setIsFactsLoading(false))
      }, [])

    useEffect(() => {
        navigation.setOptions({title: text})
    }, [])

    const renderFacts = ({item}) => {
        return(
            <View>
                <Text style={styles.rowItem}>{item.fact}</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Image style={styles.rowImage} source={{uri: image}}/>
            <Text style={styles.textDecoration}>{text}</Text>
            {isFactsLoading 
                ? <ActivityIndicator size='large'/> 
                : <FlatList 
                    data={facts}
                    renderItem={renderFacts}
                />
            }
        </View>
    )
}

export default DescriptionScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 130,
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
    rowItem: {
        fontSize: 20,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        textAlign: 'justify'
    },
    rowImage: {
        width: 100,
        height: 200
    }
})