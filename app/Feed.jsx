import React, { Component } from "react"
import { connect } from "react-redux"
import { View, FlatList, Button } from "react-native"

import { getEntries } from "./actions/entry"

class Feed extends Component {
  componentDidMount() {
    this.props.dispatch(getEntries())
  }

  render() {
    console.log(this.props.entryList);
    
    return (
      <View>
        <FlatList
          style={{ width: "100%" }}
          renderItem={({ item }) => {
            return <Button
              title={item.name}
              onPress={() => {
                this.props.navigation.navigate("Product", {
                  name: item.name
                })
              }}
            />
          }}
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
    selectedCategory: state.categories.selectedCategory,
  }
}

export default connect(mapStateToProps)(Feed)
