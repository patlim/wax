import React, { Component } from "react"
import { connect } from "react-redux"
import { View, TouchableOpacity, FlatList, Button, Image, Text } from "react-native"
import { Card } from "react-native-elements"

import { getEntries } from "./actions/entry"

class Feed extends Component {
  componentDidMount() {
    this.props.dispatch(getEntries())
  }

  render() {
    return (
      <View style={{ backgroundColor: "#ddd" }}>
        <FlatList
          style={{ width: "100%" }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Product", {
                  name: item.name,
                })
              }}
              style={{
                borderBottomLeftRadius: 7,
                borderBottomRightRadius: 7,
                alignSelf: "center",
                width: "95%",
                backgroundColor: "white",
                height: 290,
                marginBottom: 20,
                marginTop: 20,
              }}
            >
              <Image
                style={{
                  borderTopLeftRadius: 7,
                  borderTopRightRadius: 7,
                  width: "100%",
                  height: 200,
                }}
                source={{ uri: item.img }}
              />
              <View style={{ padding: 15 }}>
                <Text style={{ fontSize: '20px' }}>{item.name}</Text>
                <Text>{item.artist}</Text>
                <Text style={{ alignSelf: 'flex-end' }}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(product, idx) => product + idx} //fix this to be item id
          data={this.props.entryList}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    entryList: state.entries,
  }
}

export default connect(mapStateToProps)(Feed)
