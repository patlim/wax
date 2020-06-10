import React, { useRef, useState, useEffect } from "react"
import firebase from 'react-native-firebase'
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet, View } from "react-native"
import { Text, TouchableOpacity, Button } from "react-native"
import { connect } from 'react-redux'

import Feed from './Feed'
import { logoutUser } from './actions/user'

const Stack = createStackNavigator()

function Product({ route, navigation }) {
  return (
    <View style={styles.center}>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit this product"
        onPress={() =>
          navigation.navigate("EditProduct", {
            name: route.params.name,
          })
        }
      />
    </View>
  )
}

function apiCall(x) {
  return x
}

function EditProduct({ route, navigation }) {
  const [formState] = useState()
  const submit = useRef(() => {})

  submit.current = () => {
    apiCall(formState)
    navigation.goBack()
  }

  useEffect(() => {
    navigation.setParams({ submit })
  }, [])

  return (
    <View style={styles.center}>
      <Text>{route.params.name}</Text>
    </View>
  )
}

const FeedStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`,
        })}
        name="Product"
        component={Product}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                if (route.params.submit) {
                  route.params.submit.current()
                }
              }} >
              <Text>Done</Text>
            </TouchableOpacity>
          )
        })}
        name="EditProduct"
        component={EditProduct}
      />
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ paddingRight: 15 }}
                onPress={() => {
                  firebase.auth().signOut().then(() => {
                    this.props.dispatch(logoutUser())
                  })
                }}
              >
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            )
          },
        }}
        component={Feed}
      />
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

export default connect()(FeedStack)