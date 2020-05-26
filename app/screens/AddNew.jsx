import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Button } from 'react-native';
import { ImagePicker, Permissions } from 'expo'

export default class AddNew extends Component {
  state = { 
    image: null
   }
  render() { 
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
    return ( 
      <View style={styles.container} >
        <Text style={styles.text} >Album Art</Text>
        <Image style={styles.image} source={this.state.image ? { uri: this.state.image }: null}/>
        <View style={styles.row}>
          <Button onPress={this.selectPicture} title='gallery'>Gallery</Button>
          <Button onPress={this.takePicture} title='camera'>Camera</Button>
        </View>
      </View>
     )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#aaa',
    paddingBottom: 10
  },
  row: { flexDirection: 'row' },
  image: { width: 300, height: 300, backgroundColor: 'black' },
  button: {
    padding: 13,
    margin: 15,
    backgroundColor: '#dddddd',
  },
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
