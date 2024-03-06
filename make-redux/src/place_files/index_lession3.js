// @file: Lession3_共享结构的对象提高性能

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
    // 每次修改后的数据都不同了, 需要进行覆盖处理
    state = stateChanger(state, action) 
    // 遍历运行 订阅的逻辑处理
    listeners.forEach((listener)=> listener())
  }
  return { getState, dispatch, subscribe }
}

// 状态更新
function stateChanger (state, action) {
  switch (action.type) {
    case "UPDATE_TITLE_TEXT":
      return { // 构建新的对象并返回
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case "UPDATE_TITLE_COLOR":
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state
  }
}

// 应用渲染
function renderApp (newAppState, oldAppState = {}) {
  if (newAppState === oldAppState) return // 防止重复渲染
  
  console.log(Date.now(), "render app ...");
  
  renderTitle(newAppState.title, oldAppState.title)
  renderContent(newAppState.content, oldAppState.content)
}

// 标题渲染
function renderTitle (newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return // 防止重复渲染

  console.log(Date.now(), "render title ...");
  
  const titleDom = document.getElementById("title")
  titleDom.innerText = newTitle.text
  titleDom.style.color = newTitle.color
}

// 内容渲染
function renderContent (newContent, oldContent = {}) {
  if (newContent === oldContent) return // 防止重复渲染
  
  console.log(Date.now(), "render content ...");

  const contentDom = document.getElementById("content")
  contentDom.innerText = newContent.text
  contentDom.style.color = newContent.color
}


// ==================== TEST S ==================== //
// 创建管理对象
const store = createStore(appState, stateChanger)
// 缓存旧数据
let oldState = store.getState()
// 订阅处理渲染更新 监听数据变化
store.subscribe(() => {
  const newState = store.getState() // 数据可能变化, 获取新数据
  renderApp(newState, oldState) // 通过新旧数据对比防止页面重复渲染
  oldState = newState // 渲染完成后将新的 newState 覆盖至旧的 oldState 上, 作为缓存
})

// 首次渲染
renderApp(store.getState()) 
// 更新数据
store.dispatch({type: "UPDATE_TITLE_TEXT", text: "《Make Redux》"})
store.dispatch({type: "UPDATE_TITLE_COLOR", color: "skyblue"})
// ... 后续不管调用多少次 dispatch 进行更新, 都不需要调用 renderApp 了
// ==================== TEST E ==================== //