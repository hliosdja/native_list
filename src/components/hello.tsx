import React from 'react'
import { View, Text, StyleSheet } from "react-native"


const Hello = (props: any) => {
    return(
        <Text style={styles.textStyle}>Hello {props.name}</Text>
    )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30, 
    fontWeight: 'bold',
  }
})

export default Hello;