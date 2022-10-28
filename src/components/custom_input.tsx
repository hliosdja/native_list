import React, {useState} from 'react'
import { View, TextInput,StyleSheet, Text } from 'react-native'


const CustomInput = (props: any) => {
    const {
        value,
        placeholder,
        onChangeText,
    } = props

    return(
      <View style={styles.navbarSection}>
        <TextInput
          style={styles.inputDecoration}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
  navbarSection:{
  },
  inputDecoration: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10
  },
})