import React from "react"
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import commentsReducer from "./reducers/comments"
import CommentApp from "./containers/CommentApp";
import "./css/index.css"


const store = createStore(commentsReducer)

// 以下为React17及其之前版本的渲染方式
/*
ReactDOM.render (
    <CommentApp />,
    document.getElementById("root")
)
*/

// React 18后采用以下渲染方式
const rootDom = document.getElementById("root")
const root = createRoot(rootDom)
root.render( 
    <Provider store={ store }>
        <CommentApp/>
    </Provider>
)