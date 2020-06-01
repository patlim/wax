import React, { Component } from "react"
import { ImageBackground, StyleSheet, View, Image, Button } from "react-native"

export default class WelcomScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={{
          uri:
            "https://images.unsplash.com/photo-1513746347121-4cfd77c7dc37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
        }}
      >
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <View style={styles.inputStyle}></View>
        <View style={styles.inputStyle}></View>
        <Button title='Enter' style={styles.inputStyle} onPress={() => console.log('details')} />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  inputStyle: {
    color: '#fff',
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#333'
  },
  logo: {
    alignSelf: "center",
    position: "absolute",
    width: 200,
    height: 200,
    top: 170,
  },
})

