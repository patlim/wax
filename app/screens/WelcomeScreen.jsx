import React from "react"
import { ImageBackground, StyleSheet, View, Image } from "react-native"

const WelcomScreen = (props) => {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri:
          "https://images.unsplash.com/photo-1513746347121-4cfd77c7dc37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
      }}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.loginButton}></View>
      <View style={styles.regButton}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "blue",
  },
  regButton: {
    width: "100%",
    height: 70,
    backgroundColor: "red",
  },
  logo: {
    alignSelf: "center",
    position: "absolute",
    width: 200,
    height: 200,
    top: 170,
  },
})

export default WelcomScreen
