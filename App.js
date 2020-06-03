import React from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import "react-native-gesture-handler"
import thunkMiddleware from "redux-thunk"

import reducers from "./app/reducers/index"
import { Providers } from "./app/Providers"

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default function App() {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  )
}
