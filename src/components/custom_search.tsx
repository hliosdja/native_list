import React from 'react'
import { View, TextInput,StyleSheet } from 'react-native'


const CustomSearch = (props: any) => {
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
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
    )
}

export default CustomSearch

const styles = StyleSheet.create({
  navbarSection:{
    height: '15%',
  },
  inputDecoration: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 20
  },
})