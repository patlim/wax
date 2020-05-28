import React from "react"
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from "./app/screens/WelcomeScreen"
import AddNew from "./app/screens/AddNew"
import Home from "./app/screens/Home"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="AddNew" component={AddNew} options={{ title: 'Add New' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
