import React, { useContext, useRef, useState, useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet, View } from "react-native"
import { AuthContext } from "./AuthProvider"
import { Text, TouchableOpacity, FlatList, Button } from "react-native"
import faker from "faker"

const Stack = createStackNavigator()

function Feed({ navigation }) {
  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => (
          <Button
            title={item}
            onPress={() => {
              navigation.navigate("Product", {
                name: item,
              })
            }}
          />
        )}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </View>
  )
}

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

export const HomeStack = ({}) => {
  const { logout } = useContext(AuthContext)
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
                onPress={() => {
                  logout()
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
