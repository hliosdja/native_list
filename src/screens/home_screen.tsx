import React, {useState, useEffect} from 'react'
import { SafeAreaView, FlatList, View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import CustomInput from '../components/custom_input'
import CustomButton from '../components/custom_button'
import { Screen } from '../enums'
import { useDispatch, useSelector } from 'react-redux'
import { setQuantity, setDisplayedList, setInputValid } from '../redux/numberSlice'

const HomeScreen = ({ navigation }) => {
  const data = [
    {id: 0, item: 'first'},
    {id: 1, item: 'second'},
    {id: 2, item: 'third'},
    {id: 3, item: 'fourth'},
    {id: 4, item: 'fifth'},
  ]

  const { quantity, displayedList, isInputValid } = useSelector((state: any) => state.num)
  const dispatch = useDispatch()
  
  // useEffect(()=>{
  //   setDisplayedList(data)
  // },[])

  // useEffect(()=>{
  //   console.log(`generated data: ${generateData(20)}`)
  // },[])

  useEffect(()=>{
    dispatch(setInputValid(true))
  },[])

  const searchList = (query: string) => {
    if(query) {
      const filteredData = data.filter(
        (item)=> {
          const dataItem = item.item
          const lowered = query.toLowerCase()
          return dataItem.indexOf(lowered) > -1
        }
      )
      setDisplayedList(filteredData)
      // setNameState(query)
    } else {
      setDisplayedList(data)
      // setNameState(nameState)
    }
  }

  const generateData = (quantity: number) => {
    let num = []
    for(let i = 1; i <= quantity; i++){
      num.push(i)
    }
    return num
  }

  const validateInput = () => {
    if(isNaN(quantity)){
      dispatch(setInputValid(false))
    } else {
      if(quantity){
        // searchList(text)
        dispatch(setInputValid(true))
        dispatch(setDisplayedList(generateData(quantity)))
      } else {
        // setDisplayedList(data)
        dispatch(setQuantity(0))
        dispatch(setDisplayedList([]))
      }
    }
  }

  return(
    <SafeAreaView>
      {/* <CustomInput
        value={nameState}
        placeholder='Enter search query'
        onChangeText={(text)=>{
          if(text){
              searchList(text)
          } else {
              setDisplayedList(data)
              setNameState('')
          }
        }}
      /> */}
      <CustomInput
        value={quantity}
        placeholder='Enter quantity'
        onChangeText={(text)=>{
          if(text){
            dispatch(setQuantity(parseInt(text)))
          } else {
            dispatch(setDisplayedList([]))
          }
        }}
      />
      {!isInputValid && <Text style={styles.textDecoration}>Please enter a valid input</Text>}
      <CustomButton 
        label='Generate'
        onPress={()=>{
          validateInput()
        }}
      />
      <View style={styles.contentSection}>
        <FlatList
          data={displayedList}
          renderItem={
            ({item, index}) =>
            <TouchableHighlight
              style={styles.buttonRow} 
              underlayColor='#f1f1'
              onPress={()=> navigation.navigate(Screen.DESCRIPTION_SCREEN, {text: item, list: displayedList, index: index})}
            >
              <Text style={styles.row}>{item}</Text>
            </TouchableHighlight>
          }
          ListFooterComponent={<View style={{height: 100}}></View>}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  contentSection: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '85%',
    margin: 15,
  },
  textDecoration: {
    marginHorizontal: 20,
    marginBottom: 10
  },
  row: {
    fontSize: 30,
    padding: 10,
  },
  buttonRow: {
    width: 500,
  }
})