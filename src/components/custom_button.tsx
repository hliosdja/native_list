import React from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";

const CustomButton = (props: any) => {
    const {label, onPress} = props
    return(
        <View>
            <TouchableHighlight
                style={styles.container}
                onPress={onPress}
            >
                <Text style={styles.textDecoration}>{label}</Text>
            </TouchableHighlight>
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: '#21130d',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5
    },
    textDecoration:{
        color: 'white',
        fontSize: 20
    }
})