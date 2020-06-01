import React, { useContext, useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { ActivityIndicator, AsyncStorage } from "react-native"

import { AuthContext } from "./AuthProvider"
import { AppTabs } from "./AppTabs"
import { AuthStack } from './AuthStack'

export const Routes = ({}) => {
  const { user, login } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // check if user logged in
    AsyncStorage.getItem("user")
      .then((userString) => {
        if (userString) {
          login()
        }
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return <ActivityIndicator size="large" />
  }
  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}
