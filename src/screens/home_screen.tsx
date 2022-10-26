import React, {useState, useEffect} from 'react'
import { SafeAreaView, FlatList, View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import CustomSearch from '../components/custom_search'
import { Screen } from '../enums'

const HomeScreen = ({ navigation }) => {
  const data = [
    {id: 0, item: 'first'},
    {id: 1, item: 'second'},
    {id: 2, item: 'third'},
    {id: 3, item: 'fourth'},
    {id: 4, item: 'fifth'},
  ]

  const [nameState, setNameState] = useState('')
  const [dataList, setDataList] = useState(data)
  const [displayedList, setDisplayedList] = useState([])
  
  useEffect(()=>{
    setDisplayedList(data)
  },[])

  const searchList = (query: string) => {
    if(query) {
      const filteredData = dataList.filter(
        (item)=> {
        const dataItem = item.item
        const lowered = query.toLowerCase()
        return dataItem.indexOf(lowered) > -1
        }
      )
      setDisplayedList(filteredData)
      setNameState(query)
    } else {
      setDisplayedList(data)
      setNameState(nameState)
    }
  }

  return(
    <SafeAreaView>
        <CustomSearch
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
        />
        <View style={styles.contentSection}>
          <FlatList
            data={displayedList}
            renderItem={
              ({item}) =>
                <TouchableHighlight
                  style={styles.buttonRow} 
                  underlayColor='#f1f1'
                  onPress={()=> navigation.navigate(Screen.DESCRIPTION_SCREEN, {text: item.item})}
                >
                  <Text style={styles.row}>{item.item}</Text>
                </TouchableHighlight>
            }
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
    margin: 10,
  },
  row: {
    fontSize: 30,
    padding: 10,
  },
  buttonRow: {
    width: 500
  }
})