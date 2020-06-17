// SignUp.js
import React from "react"
import { StyleSheet, Text, TextInput, View, Button } from "react-native"
import firebase from "react-native-firebase"

export default class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    passwordCheck: "",
    username: "",
    errorMessage: null,
  }

  handleSignUp = () => {
    const { username, email, password, passwordCheck } = this.state
    if (password !== passwordCheck) {
      this.setState({ errorMessage: "Passwords do not match"})
    } else if (password === passwordCheck) {
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials)=>{
        if(userCredentials.user){
          userCredentials.user.updateProfile({
            displayName: username
          })
      }})
      .catch((error) => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          secureTextEntry
          placeholder="Username"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          secureTextEntry
          placeholder="Retype Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(passwordCheck) => this.setState({ passwordCheck })}
          value={this.state.passwordCheck}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
  },
})
