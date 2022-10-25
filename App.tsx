import React, {useState, useEffect} from 'react'
import { TextInput, View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native'
import Hello from './src/components/hello'

export default function App() {

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
      console.log(`lowered: ${query.toLocaleLowerCase}`)
      setDisplayedList(filteredData)
      setNameState(query)
    } else {
      setDisplayedList(data)
      setNameState(nameState)
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.navbarSection}>
        <TextInput
          style={styles.inputDecoration}
          value={nameState}
          onChangeText={(text)=>{
            if(text){
              searchList(text)
            } else {
              setNameState('')
            }
          }}
          placeholder='Enter you name here'
        />
      </View>
      <View style={styles.contentSection}>
        <FlatList
          data={displayedList}
          renderItem={
            ({item}) => <Text style={styles.row}>{item.item}</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbarSection:{
    height: '15%',
  },
  contentSection: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '85%',
    margin: 10,
  },
  inputDecoration: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 50
  },
  row: {
    fontSize: 30,
    padding: 10,

  }
})