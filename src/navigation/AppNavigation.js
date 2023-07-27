import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MovieScreen from '../Screens/MovieScreen';
import BottomTabNavigation from './BottomTabNavigation';
import SearchTab from '../Tabs/SearchTab';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTabBar" component={BottomTabNavigation} options={{headerShown:false}}  />
        <Stack.Screen name="Movie" component={MovieScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation