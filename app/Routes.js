import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import firebase from "react-native-firebase"
import { connect } from "react-redux"

import { AppTabs } from "./AppTabs"
import { AuthStack } from "./AuthStack"
import { Loading } from "./Loading"

import { loginUser } from "./actions/user"

class Routes extends React.Component {
  state = {
    isLoading: true,
    currentUser: null
  }
  componentDidMount() {
    this.setState({ isLoading: false })
    firebase.auth().onAuthStateChanged(() => {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
      this.props.dispatch(loginUser(currentUser))
    })
  }

  render() {
    const { isLoading, currentUser } = this.state
    return (
      <NavigationContainer>
        { isLoading
          ? <Loading />
          : currentUser ? <AppTabs /> : <AuthStack />
        }
      </NavigationContainer>
    )
  }
}

export default connect()(Routes)
