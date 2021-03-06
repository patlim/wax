import React, { Component } from "react"
import { connect } from "react-redux"
import { View, TouchableOpacity, FlatList, Button, Image, Text } from "react-native"
import { Card } from "react-native-elements"

import { getFeed } from "./actions/feed"

class Feed extends Component {
  componentDidMount() {
    this.props.dispatch(getFeed())
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
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
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 1, width: 1 },
                shadowOpacity: 1,
                shadowRadius: 1,
                borderRadius: 7,
                alignSelf: "center",
                width: "95%",
                backgroundColor: "white",
                height: 290,
                marginBottom: 5,
                marginTop: 5,
              }}
            >
              <Image
                style={{
                  borderTopLeftRadius: 7,
                  borderTopRightRadius: 7,
                  width: "100%",
                  height: 200,
                }}
                source={{ uri: item.image }}
              />
              <View style={{ padding: 15 }}>
                <Text style={{ fontSize: 15 }}>{item.name}</Text>
                <Text>{item.artist}</Text>
                <Text style={{ alignSelf: 'flex-end' }}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(product, idx) => product + idx} //fix this to be item id
          data={this.props.feedList}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    feedList: state.feed
  }
}

export default connect(mapStateToProps)(Feed)
