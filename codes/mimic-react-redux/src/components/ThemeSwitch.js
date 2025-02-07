import React , { Component } from "react";
import PropTypes from "prop-types";

export default class ThemeSwitch extends Component {

    static contextTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func,
    }
    
    handleSwitchColor (color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render () {
        return (
            <div>
                <button 
                    style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, "Tomato")}>Tomato</button>
                
                <button 
                    style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, "Skyblue")}>Skyblue</button>
            </div>
        )
    }
}
