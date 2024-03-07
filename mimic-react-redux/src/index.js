import React, { Component } from 'react';
import PropTypes from "prop-types"
import { createRoot } from 'react-dom/client';
import Header from './Header';
import Content from './Content';

function createStore (reducer) {
  let state = null
  // 监听数组
  const listeners = []
  // 消息订阅处理
  const subscribe = (listener) => listeners.push(listener)
  // 获取状态
  const getState = () => state
  // 状态处理
  const dispatch = (action) => {
    // 每次修改后的数据都不同了, 需要进行覆盖处理
    state = reducer(state, action) 
    // 遍历运行 订阅的逻辑处理
    listeners.forEach((listener)=> listener())
  }
  // 初始化 store
  dispatch({})
  return { getState, dispatch, subscribe }
}
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
  
  static childContextTypes = {
    store: PropTypes.object
  }

  // 使用 context 传递状态 store
  getChildContext () {
    return { store } 
  }

  render () {
    return (
      <div>
        <Header></Header>
        <Content></Content>
      </div>
    )
  }
}

// ReactDOM.render(
//   <Index/>,
//   document.getElementById("root")
// )

const root = createRoot(document.getElementById('root'))
root.render(<Index/>)


