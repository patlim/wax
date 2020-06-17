import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image, StyleSheet } from "react-native"
import { Ionicons } from "react-native-vector-icons"
import firebase from "react-native-firebase"

import FeedStack from "./FeedStack"
import AddNew from "./AddNew"
import Profile from "./Profile"

const Tabs = createBottomTabNavigator()

export const AppTabs = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === "Feed") return <Ionicons name="ios-list" size={size} color={color} />
          else if (route.name === "AddNew") return <Ionicons name='ios-add-circle' size={size} color={color} />
          else if (route.name === "Profile") return <Image style={styles.profileImg} source={{ uri: firebase.auth().currentUser.photoURL }}/>
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Feed" component={FeedStack} />
      <Tabs.Screen name="AddNew" component={AddNew} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    width: 25,
    height: 25,
    borderRadius: 25/2
  }
})
