import React from "react"
import CommentApp from "./CommentApp";
import "./css/index.css"
import {createRoot} from "react-dom/client";

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
root.render( <CommentApp/> )