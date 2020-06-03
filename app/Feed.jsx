import React, { Component } from "react"
import { connect } from "react-redux"
import { View, ScrollView, FlatList, Button, Image, Text } from "react-native"
import { Card } from "react-native-elements"

import { getEntries } from "./actions/entry"

class Feed extends Component {
  componentDidMount() {
    this.props.dispatch(getEntries())
  }

  render() {
    return (
      <View>
        <FlatList
          style={{ width: "100%" }}
          renderItem={({ item }) => (
            <Card>
              <Text>{item.name}</Text>
              <Image source={{ width: "100%", height: 200, uri: item.img }} />
              <Button
                title="view"
                onPress={() => {
                  this.props.navigation.navigate("Product", {
                    name: item.name,
                  })
                }}
              />
            </Card>
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
