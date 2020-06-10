import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import firebase from "react-native-firebase"

import { AppTabs } from "./AppTabs"
import { AuthStack } from "./AuthStack"
import { Loading } from "./Loading"

export class Routes extends React.Component {
  state = {
    isLoading: true,
    currentUser: null
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isLoading: false })
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
    })
  }

  render() {
    const { isLoading, currentUser } = this.state
    return (
      <NavigationContainer>
        { isLoading
          ? <Loading />
          : user ? <AppTabs /> : <AuthStack />
        }
      </NavigationContainer>
    )
  }
}
