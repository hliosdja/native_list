import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const DescriptionScreen = ({ navigation, route }, props: any) => {
    const { text } = route.params
    console.log(text)
    return(
        <View style={styles.container}>
            <Text style={styles.textDecoration}>{text}</Text>
            {/* <TouchableHighlight
                style={styles.buttonDecoration}
                underlayColor='#f1f2'
                onPress={()=>navigation.goBack()}
            >
                <Text>Go back</Text>
            </TouchableHighlight> */}
        </View>
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
    }
})