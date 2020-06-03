import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, Alert } from 'react-native'
import { Button, ButtonGroup } from 'react-native-elements';
import * as Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AddNew extends Component {
  state = { 
    image: null,
    artist: '',
    albumName: ''
   }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
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

      console.log(result)
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

  render() {
    let { image } = this.state
    return ( 
      <View style={styles.container}>
        <Text style={styles.header}>Add New</Text>
        {image
          ? <TouchableOpacity onPress={() => Alert.alert("Retake Album Art", null, [
              {text: 'Gallery', onPress: this.selectPicture},
              {text: 'Camera', onPress: this.takePicture}
            ])}>
              <Image style={styles.image} source={{ uri: image }} />
            </TouchableOpacity>
          : <TouchableOpacity style={styles.image} onPress={() => Alert.alert("Add Album Art", null, [
              {text: 'Take Photo', onPress: this.takePicture},
              {text: 'Choose from Gallery', onPress: this.selectPicture},
              {text: "Cancel", style: "cancel"}
            ])}>
            <Icon name='plus-square' size={50} color='gray'/>
          </TouchableOpacity>
          }
        <View style={styles.form}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Artist"
            value={this.state.artist}
            onChangeText={text => this.setState({ artist: text })}
            placeholderTextColor="#111"
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Album"
            value={this.state.album}
            onChangeText={text => this.setState({ albumName: text })}
            placeholderTextColor="#111"
          />
        </View>
        <TouchableOpacity style={styles.confirmButton} onPress={() => alert(`${this.state.artist} and album name ${this.state.albumName}`)}>
          <Text style={styles.confButton}>Confirm</Text>
        </TouchableOpacity>
      </View>
     )
  }
}

const styles = StyleSheet.create({
  camButtons: {
    margin: 10
  },
  confButton: {
    color: '#111'
  },
  header: {
    fontSize: 40,
    paddingLeft: 55,
    paddingBottom: 20,
    alignSelf: 'flex-start',
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: '#444',
    paddingBottom: 10
  },
  row: {
    flexDirection: 'row',
    padding: 15
  },
  image: {
    width: 300,
    height: 300,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: 13,
    margin: 15,
    backgroundColor: '#dddddd',
  },
  container: {
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center'
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
  selectPicture: {
    color: '#222'
  },
  takePicture: {
  },
  form: {
    paddingTop: 30
  },
  confirmButton: {
    color: '#fff',
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
