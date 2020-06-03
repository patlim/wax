import React, { useContext, useState, useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { View, Text, Button, StyleSheet } from "react-native"

import { AuthContext } from "./AuthProvider"

const Stack = createStackNavigator()

function Login({ navigation }) {
  const { login } = useContext(AuthContext)
  return (
    <View style={styles.center}>
      <Text>I am a login screen</Text>
      <Button
        title="log me in"
        onPress={() => {
          login()
        }}
      />
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register")
        }}
      />
    </View>
  )
}

const Register = ({ navigation }) => (
  <View style={styles.center}>
    <Text>I am a Register screen</Text>
    <Button
      title="go to login"
      onPress={() => {
        navigation.navigate("Login")
      }}
    />
  </View>
)

export const AuthStack = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        options={{ headerTitle: "Sign Up" }}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
})
