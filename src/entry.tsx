import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'

import DescriptionScreen from './screens/description_screen'
import HomeScreen from './screens/home_screen'

import { NavigationContainer } from '@react-navigation/native'
import { Screen } from './enums'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()


const Entry = () => {
    return(
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={Screen.HOME_SCREEN}>
                    <Stack.Screen name={Screen.HOME_SCREEN} component={HomeScreen}/>
                    <Stack.Screen name={Screen.DESCRIPTION_SCREEN} component={DescriptionScreen} options={{ title:'Numbers Screen' }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default Entry