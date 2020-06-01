import React, { useContext } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, Text, Button, StyleSheet } from "react-native"
import { Ionicons } from 'react-native-vector-icons'

import { AuthContext } from "./AuthProvider"
import { HomeStack } from "./HomeStack"

const Tabs = createBottomTabNavigator()

function Search() {
  return (
    <View style={styles.center}>
      <Text>Search</Text>
    </View>
  )
}

export const AppTabs = ({}) => {
  return (
    <Tabs.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline'
        } else if (route.name === 'Search') {
          iconName = focused
            ? 'ios-list-box'
            : 'ios-list'
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
