import React, { Component } from 'react';
import { createStore } from 'redux'
import { createRoot } from 'react-dom/client';
import Header from './containers/Header';
import Content from './containers/Content';
import { Provider } from "react-redux"


// theme 处理函数
const themeRender = (state, action) => {
  if (!state) return {
    themeColor: "Orange",
  }
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeRender)

class Index extends Component {
  
  render () {
    return (
      <div>
        <Header></Header>
        <Content></Content>
      </div>
    )
  }
}

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={ store }>
    <Index/>
  </Provider>
)


