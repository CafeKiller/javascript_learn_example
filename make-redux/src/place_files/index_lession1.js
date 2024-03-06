// @file: Lession1_优雅地修改共享状态

// 状态
let appState = {
  title : {
    text: "Make Redux - Cafe の React Learn",
    color: "skyblue",
  },
  content: {
    text: "React.js",
    color: "tomato",
  },
}

// 状态修改
function dispatch (action) {
  switch (action.type) {
    case "UPDATE_TITLE_TEXT":
      appState.title.text = action.text
      break
    case "UPDATE_TITLE_COLOR":
      appState.title.color = action.text
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
// 首次渲染
renderApp(appState) 

// 更新数据
dispatch({type: "UPDATE_TITLE_TEXT", text: "《Make Redux》"})
dispatch({type: "UPDATE_TITLE_COLOR", color: "pink"})

// 重新渲染新数据
renderApp(appState) 
// ==================== TEST E ==================== //