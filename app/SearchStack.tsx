import React, { useState } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { SearchParamList } from "./SearchParamList"
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacityComponent,
  Button,
  FlatList,
} from "react-native"
import faker from "faker"

interface SearchStackProps {}

const Stack = createStackNavigator<SearchParamList>()

function Search() {
  const [show, setShow] = useState(false)
  return (
    <View style={styles.center}>
      <Button
        title="Search Products"
        onPress={() => {
          setShow(true)
        }}
      />
      {show ? (
        <FlatList
          style={{ width: "100%" }}
          renderItem={({ item }) => {
            return (
              <Button
                title={item}
                onPress={() => {
                  // navigation.navigate("Product", {
                  //   name: item,
                  // })
                }}
              />
            )
          }}
          keyExtractor={(product, idx) => product + idx}
          data={Array.from(Array(50), () => faker.commerce.product())}
        />
      ) : null}
      <Text>Search</Text>
    </View>
  )
}

export const SearchStack: React.FC<SearchStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
