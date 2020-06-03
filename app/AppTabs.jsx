import React, { useContext } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, Text, Button, StyleSheet } from "react-native"
import { Ionicons } from "react-native-vector-icons"

import { AuthContext } from "./AuthProvider"
import { FeedStack } from "./FeedStack"
// import { AddNew } from "../screens/AddNew"

const Tabs = createBottomTabNavigator()

function Search() {
  return (
    <View style={styles.center}>
      <Text>Search</Text>
    </View>
  )
}

function AddNew() {
  return (
    <View style={styles.center}>
      <Text>AddNew</Text>
    </View>
  )
}

export const AppTabs = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === "Feed") {
            iconName = focused
              ? "ios-list-box"
              : "ios-list"
          } else if (route.name === "Search") {
            iconName = focused ? "ios-list-box" : "ios-list"
          } else if (route.name === "AddNew") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle"
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Feed" component={FeedStack} />
      <Tabs.Screen name="Other" component={Search} />
      {/* <Tabs.Screen name="AddNew" component={AddNew} /> */}
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
