import React from "react"
import { View, Text, ActivityIndicator, StyleSheet } from "react-native"

export const Loading = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
