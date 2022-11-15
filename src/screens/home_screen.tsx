import React, {useState, useEffect} from 'react'
import { SafeAreaView, FlatList, View, StyleSheet, Text, TouchableHighlight, Image, ActivityIndicator } from 'react-native'
import { Screen } from '../enums'
import { useDispatch, useSelector } from 'react-redux'
import { setQuantity, setDisplayedList, setInputValid } from '../redux/numberSlice'
// import fetchData from '../network'

const HomeScreen = ({ navigation }) => {
  const [apiData, setApiData] = useState([])
  const [isAnimeListLoading, setIsAnimeListLoading] = useState(true)

  useEffect(() => {
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
    .then((response) => response.json())
    .then((result) => {
      setApiData(result.data)
    })
    .catch((e) => {console.log('err: ', e)})
    .finally(() => setIsAnimeListLoading(false))
  }, [])

  const renderApiData = ({item}) => {
    return(
      <TouchableHighlight
        style={styles.buttonRow}
        onPress={() => {
          navigation.navigate(Screen.DESCRIPTION_SCREEN, {image: item.anime_img, text: item.anime_name})
        }}
      >
        <View>
          <Image style={styles.rowImage} source={{uri: item.anime_img}}/>
          <Text style={styles.row}>{item.anime_name}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  return(
    <SafeAreaView>
      <View style={styles.contentSection}>
        {isAnimeListLoading 
          ? <ActivityIndicator size='large'/>
          : <FlatList 
              data={apiData}
              showsVerticalScrollIndicator={false}
              renderItem={renderApiData}
              keyExtractor={(item) => item.anime_id.toString()}
            />
        }
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  contentSection: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '98%',
    marginHorizontal: 15,
    marginTop: 130,
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },
  textDecoration: {
    marginHorizontal: 20,
    marginBottom: 10
  },
  row: {
    fontSize: 30,
    padding: 10
  },
  rowImage: {
    width: 100,
    height: 200
  },
  buttonRow: {
    width: 500,
  }
})