import React , { Component } from "react";
import PropTypes from "prop-types";

class ThemeSwitch extends Component {

    static contextTypes = {
        store: PropTypes.object
    }

    constructor () {
        super()
        this.state = { themeColor: "" }
    }

    // 挂载时处理
    componentDidMount () {
        const { store } = this.context
        this._updateThemeColor()
        // 绑定监听
        store.subscribe(() => this._updateThemeColor())
    }

    // 更新主题颜色
    _updateThemeColor () {
        const { store } = this.context // 从 context 中获取状态 store
        const state = store.getState()
        this.setState({ themeColor: state.themeColor })
        
    }

    // 处理颜色切换
    handleSwitchColor (color) {
        const { store } = this.context
        store.dispatch({
            type: "CHANGE_COLOR",
            themeColor: color
        }) 
    }

    render () {
        return (
            <div>
                <button 
                    style={{ color:this.state.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, "Tomato")}>Tomato</button>
                
                <button 
                    style={{ color:this.state.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, "Skyblue")}>Skyblue</button>
            </div>
        )
    }
}

export default ThemeSwitch