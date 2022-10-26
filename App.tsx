import React, { useState } from 'react';
import HomeScreen from './src/screens/home_screen'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DescriptionScreen from './src/screens/description_screen';
import { Screen } from './src/enums'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screen.HOME_SCREEN}>
        <Stack.Screen name={Screen.HOME_SCREEN} component={HomeScreen}/>
        <Stack.Screen name={Screen.DESCRIPTION_SCREEN} component={DescriptionScreen} options={{ title:'Numbers Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}