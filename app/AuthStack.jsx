import React, { useContext, useState, useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { View, Text, Button, StyleSheet } from "react-native"

import { AuthContext } from "./AuthProvider"
import SignUp from './SignUp'
import Login from './Login'
import Loading from './Loading'

const Stack = createStackNavigator()

export const AuthStack = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen options={{ headerTitle: "Sign Up" }} name="SignUp" component={SignUp} />
      <Stack.Screen name="Loading" component={Loading} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
