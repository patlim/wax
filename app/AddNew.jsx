import React, { Component } from "react"
import { Button, ButtonGroup } from "react-native-elements"
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions"
import Icon from "react-native-vector-icons/FontAwesome"
import { connect } from "react-redux"
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Image,
  Alert,
  SafeAreaView,
} from "react-native"

import { addToFeed } from "./actions/feed"

class AddNew extends Component {
  state = {
    image: null,
    artist: "",
    albumName: "",
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

  clickHandler = (feedObj, navigation) => {
    const { addToFeed } = this.props
    addToFeed(feedObj)
    this.setState({ image: null, artist: "", albumName: "" })
    navigation.navigate("Feed")
  }

  render() {
    let { image } = this.state
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.header}>Add New</Text>
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
              <Icon name="plus-square" size={50} color="gray" />
            </TouchableOpacity>
          )}
          <View style={styles.form}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Artist"
              value={this.state.artist}
              onChangeText={(text) => this.setState({ artist: text })}
              placeholderTextColor="#111"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Album"
              value={this.state.album}
              onChangeText={(text) => this.setState({ albumName: text })}
              placeholderTextColor="#111"
            />
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => this.clickHandler(this.state, this.props.navigation)}
          >
            <Text style={styles.confButton}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  camButtons: {
    margin: 10,
  },
  confButton: {
    color: "#111",
  },
  header: {
    fontSize: 30,
    paddingBottom: 15,
    alignSelf: "flex-start",
    color: "#333",
  },
  text: {
    fontSize: 20,
    color: "#444",
    paddingBottom: 10,
  },
  row: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 335,
    height: 335,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 13,
    margin: 15,
    backgroundColor: "#dddddd",
  },
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  inputStyle: {
    marginTop: 20,
    width: 335,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#ddd",
  },
  selectPicture: {
    color: "#222",
  },
  takePicture: {},
  form: {
    paddingTop: 30,
  },
  confirmButton: {
    color: "#fff",
    marginTop: 20,
    width: 335,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
})

function mapDispatchToProps(dispatch) {
  return {
    addToFeed: (feedObj) => dispatch(addToFeed(feedObj)),
  }
}

export default connect(null, mapDispatchToProps)(AddNew)
