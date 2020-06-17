import React, { Component } from "react"
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native"
import { connect } from "react-redux"
import firebase from "react-native-firebase"

import { getFeed } from "./actions/feed"

function HorizontalFlatListItem({ item }) {
  return (
    <Image
      style={{
        shadowColor: "rgba(0,0,0, .2)",
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        borderRadius: 7,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        width: 250,
        height: 250,
        margin: 5,
      }}
      source={{ uri: item.image }}
    />
  )
}

class Profile extends Component {
  state = {
    user: {},
  }
  componentDidMount() {
    this.props.dispatch(getFeed())
  }
  render() {
    const { displayName } = firebase.auth().currentUser
    return (
      <ScrollView contentContainerStyle={styles.center}>
        <Image
          style={{
            marginTop: 100,
            height: 200,
            width: 200,
            borderRadius: 200 / 2,
          }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1579295560051-3df968edb036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          }}
        />
        <Text style={{ padding: 30, fontSize: 30 }}>{displayName}</Text>
        <Text style={{ fontSize: 15 }}>Collection Size: 24</Text>
        <Text style={{ fontSize: 15 }}>info</Text>
        <Text style={{ fontSize: 15 }}>more info</Text>
        <View style={{ marginBotton: 50 }}>
          <Text style={{ paddingLeft: 30, paddingTop: 30, fontSize: 20 }}>
            Collection
          </Text>
          <FlatList
            horizontal={true}
            renderItem={({ item }) => <HorizontalFlatListItem item={item} />}
            keyExtractor={(product, idx) => product + idx} //fix this to be item id
            data={this.props.feedList}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
})

const mapStateToProps = (state) => {
  return {
    feedList: state.feed,
  }
}

export default connect(mapStateToProps)(Profile)
