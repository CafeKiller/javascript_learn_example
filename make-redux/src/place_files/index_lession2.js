// @file: Lession2_抽离 store 和监控数据变化

// 状态
let appState = {
  title : {
    text: "Make Redux - Cafe の React Learn",
    color: "pink",
  },
  content: {
    text: "React.js",
    color: "tomato",
  },
}


/**
 * 创建状态管理对象
 * @param { Object } 需要被管理的状态对象
 * @param { Function } 状态更新时的处理函数
 * */ 
function createStore (state, stateChanger) {
  // 监听数组
  const listeners = []
  // 消息订阅处理
  const subscribe = (listener) => listeners.push(listener)
  // 获取状态
  const getState = () => state
  // 状态处理
  const dispatch = (action) => {
    stateChanger(state, action)
    // 遍历运行 订阅的逻辑处理
    listeners.forEach((listener)=> listener())
  }
  return { getState, dispatch, subscribe }
}

// 状态更新
function stateChanger (state, action) {
  switch (action.type) {
    case "UPDATE_TITLE_TEXT":
      state.title.text = action.text
      break
    case "UPDATE_TITLE_COLOR":
      state.title.color = action.color
      break
    default:
      console.log("%c dispatch Error", 'color: red;font-size: 24px;')
      break
  }
}

// 应用渲染
function renderApp (appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

// 标题渲染
function renderTitle (title) {
  const titleDom = document.getElementById("title")
  titleDom.innerText = title.text
  titleDom.style.color = title.color
}

// 内容渲染
function renderContent (content) {
  const contentDom = document.getElementById("content")
  contentDom.innerText = content.text
  contentDom.style.color = content.color
}


// ==================== TEST S ==================== //
// 创建管理对象
const store = createStore(appState, stateChanger)
// 订阅处理渲染更新
store.subscribe(() => renderApp(store.getState()))

// 首次渲染
renderApp(store.getState()) 

// 更新数据
store.dispatch({type: "UPDATE_TITLE_TEXT", text: "《Make Redux》"})
store.dispatch({type: "UPDATE_TITLE_COLOR", color: "skyblue"})
// ... 后续不管调用多少次 dispatch 进行更新, 都不需要调用 renderApp 了
// ==================== TEST E ==================== //