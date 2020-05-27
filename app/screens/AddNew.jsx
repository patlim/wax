import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image } from 'react-native'
import { Button, ButtonGroup } from 'react-native-elements';
import { ImagePicker, Permissions } from 'expo'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AddNew extends Component {
  state = { 
    image: null,
    artist: '',
    albumName: ''
   }
   
  selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL)
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsynce({
      aspect: 1,
      allowsEditing: true
    })
    if (!cancelled) this.setState({ image: uri })
  }

  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA)
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false
    })
    if (!cancelled) this.setState({ image: uri })
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.header}>Add New</Text>
        <Image style={styles.image} source={this.state.image ? { uri: this.state.image }: null}/>
        <View style={styles.row}>
          <Button onPress={this.selectPicture}
            title=' gallery'
            style={styles.camButtons}
            icon={<Icon name="image" size={15} color="white" />}
          />
          <Button onPress={this.takePicture}
            title=' camera'
            style={styles.camButtons}
            icon={<Icon name="camera" size={15} color="white" />}
          />
          {/* <Text
            onPress={this.updateIndex}
            selectedIndex={this.selectedIndex}
            buttons={['Hello', 'World', 'Buttons']}
            containerStyle={{height: 100}}
          /> */}
          
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Artist"
            value={this.state.artist}
            onChange={text => this.setState({ artist: text })}
            placeholderTextColor="#111"
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Album"
            value={this.state.album}
            onChange={text => this.setState({ albumName: text })}
            placeholderTextColor="#111"
          />
        </View>
        <View style={styles.confirmButton}>
          <Text style={styles.confButton}>Confirm</Text>
        </View>
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
    paddingBottom: 30
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
  image: { width: 300, height: 300, backgroundColor: '#111' },
  button: {
    padding: 13,
    margin: 15,
    backgroundColor: '#dddddd',
  },
  container: {
    flex: 1,
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
