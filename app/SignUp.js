// SignUp.js
import React from "react"
import { StyleSheet, Alert, Text, TextInput, View, Button, TouchableOpacity, Image } from "react-native"
import firebase from "react-native-firebase"
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import Icon from "react-native-vector-icons/FontAwesome"

export default class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    passwordCheck: "",
    username: "",
    image: "",
    errorMessage: null,
  }

  componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!")
    }
  }

  selectPicture = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      })
      if (!result.cancelled) {
        this.setState({ image: result.uri })
      }
    } catch (E) {
      console.log(E)
    }
  }

  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA)
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    })
    if (!cancelled) this.setState({ image: uri })
  }

  handleSignUp = () => {
    const { username, email, password, passwordCheck, image } = this.state
    if (password !== passwordCheck) {
      this.setState({ errorMessage: "Passwords do not match" })
    } else if (password === passwordCheck) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          if (userCredentials.user) {
            userCredentials.user.updateProfile({
              displayName: username,
              photoURL: image
            })
          }
        })
        .catch((error) => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    const { image } = this.state
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          behavior="padding"
          contentContainerStyle={styles.container}
        >
          <Text>Sign Up</Text>
          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}
          {image ? (
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Retake Album Art", null, [
                  { text: "Gallery", onPress: this.selectPicture },
                  { text: "Camera", onPress: this.takePicture },
                ])
              }
            >
              <Image style={styles.image} source={{ uri: image }} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.image}
              onPress={() =>
                Alert.alert("Add Album Art", null, [
                  { text: "Take Photo", onPress: this.takePicture },
                  { text: "Choose from Gallery", onPress: this.selectPicture },
                  { text: "Cancel", style: "cancel" },
                ])
              }
            >
              <Icon name="plus" size={50} color="gray" />
            </TouchableOpacity>
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
        </KeyboardAwareScrollView>
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    margin: 8
  }
})
